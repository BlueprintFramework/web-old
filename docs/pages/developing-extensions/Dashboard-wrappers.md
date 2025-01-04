# Dashboard wrappers
<h4 class="fw-light">Extend the Pterodactyl client and admin dashboard within the Laravel blade wrapper.</h4><br/>

## Overview
Blueprint provides wrappers for both admin and client dashboards, allowing you to seamlessly integrate your extension's UI into Pterodactyl's interface.

## Configuration
To use dashboard wrappers, specify their locations in your `conf.yml`:

```yaml
# conf.yml

# Admin panel wrapper
admin:
  views: views.blade.php
  wrapper: admin/wrapper.blade.php  # Path relative to your extension's views directory

# Client dashboard wrapper
dashboard:
  wrapper: dashboard/wrapper.blade.php  # Path relative to your extension's views directory
```

## Example Wrapper
Here's a basic example of a wrapper file that loads a JavaScript file for all admin pages:

```blade
{{-- admin/wrapper.blade.php --}}
<script src="/js/example.js"></script>
```

This wrapper will load the specified JavaScript file on every page in your admin views.

## Navigation
<div class="btn-group docs-navigator" role="group" aria-label="Navigation" style="float: right">
  <a href="?page=developing-extensions/Admin-configuration" class="btn btn-dark bg-light-subtle border-light-subtle">Previous</a>
  <a href="?page=developing-extensions/React-components" class="btn btn-dark bg-light-subtle border-light-subtle">Next</a>
</div>
