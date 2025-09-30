import ExtensionsHtml from "../../browse/extensions.html"

function insertMetadata(data) {
	let meta = ''

	for (const key in data) {
		meta += `<meta name="${key}" content="${data[key]}">`
	}

	return ExtensionsHtml.replace('<!-- META -->', meta)
}

function insertReviewData(html, data) {
	const totalReviews = Object.values(data.platforms).reduce((sum, platform) => sum + platform.reviews, 0)
	const platformsWithRatings = Object.values(data.platforms).filter((x) => x.rating)
	const averageRating = platformsWithRatings.length > 0
		? platformsWithRatings.reduce((sum, platform) => sum + platform.rating, 0) / platformsWithRatings.length
		: 0

	const jsonLd = {
		'@context': 'https://schema.org/',
		'@type': 'Product',
		'name': data.name,
		'image': data.banner.fullres,
		'description': data.summary,
		'brand': {
			'@type': 'Thing',
			'name': data.author.name
		},
		'sku': data.identifier,
		'offers': Object.values(data.platforms).map((platform) => ({
			'@type': 'Offer',
			'url': platform.url,
			'price': platform.price.toFixed(2),
			'priceCurrency': platform.currency,
			'availability': 'https://schema.org/InStock'
		}))
	}

	if (totalReviews > 0 && averageRating > 0) {
		jsonLd.aggregateRating = {
			'@type': 'AggregateRating',
			'ratingValue': averageRating.toFixed(1),
			'reviewCount': totalReviews.toString(),
			'bestRating': '5',
			'worstRating': '1'
		}
	}

	return html.replace('<!-- JSON-LD -->', `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`)
}

export const onRequest = async(context) => {
	const url = new URL(context.request.url)

	const meta = {
		'theme-color': '#4642f5',
		'description': '',
		'og:description': '',
		'og:title': 'blueprint.zip',
		'og:image': '/.assets/brand/og.jpg',
		'og:url': context.request.url,
		'og:type': 'website',
		'twitter:card': 'summary_large_image',
		'twitter:url': context.request.url,
		'twitter:title': 'blueprint.zip',
		'twitter:description': '',
		'twitter:image': '/.assets/brand/og.jpg'
	}

	if (url.pathname.endsWith('/')) {
		url.pathname = url.pathname.slice(0, -1)
	}

	if (!url.pathname.includes('assets') && !url.pathname.includes('.js') && !url.pathname.includes('.css')) {
		const data = await fetch('https://api.blueprintframe.work/api/extensions').then((res) => res.json()).catch(() => null),
			extension = url.pathname.split('/').pop()

		if (!data) {
			return new Response(insertMetadata(meta), {
				headers: {
					'Content-Type': 'text/html'
				}
			})
		}

		if (data.some((x) => x.identifier === extension || x.id.toString() === extension)) {
			const extensionData = data.find((x) => x.identifier === extension || x.id.toString() === extension)

			if (!extensionData) return context.env.ASSETS.fetch(url)

			return new Response(insertReviewData(insertMetadata({
				...meta,
				'og:title': `${extensionData.name}`,
				'description': `${extensionData.summary}`,
				'og:description': `${extensionData.summary}`,
				'og:image': extensionData.banner.fullres,
				'twitter:title': `${extensionData.name}`,
				'twitter:description': `${extensionData.summary}`,
				'twitter:image': extensionData.banner.fullres
			}), extensionData), {
				headers: {
					'Content-Type': 'text/html'
				}
			})
		}
	}

	return context.env.ASSETS.fetch(url)
}
