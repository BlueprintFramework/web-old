# Dashboard wrappers
<h4 class="fw-light">Extend Pterodactyl's interface by injecting your own code.</h4><br/>

Blueprint provides wrappers that let you inject code into Pterodactyl's interface. Wrappers are rendered on the server while the page is loading, before any client-side JavaScript runs.

## Configuration
Configure your wrappers in `conf.yml`:

```yaml
# conf.yml

admin:
  views: views.blade.php
  wrapper: wrapper.blade.php 
```

## Basic Usage
Add a wrapper to inject content into every page:

```php
<!-- wrapper.blade.php -->
@php
    $user = Auth::user();
@endphp

@if($user && $user->root_admin)
    <h1>Welcome, {{ $user->name }}!</h1>
@endif
```

## Going Further
You can do much more with wrappers:
- Load different assets based on user roles
- Include dynamic configuration
- Add conditional content
- Integrate with Laravel's features

## Navigation
<div class="btn-group docs-navigator" role="group" aria-label="Navigation" style="float: right">
  <a href="?page=developing-extensions/Admin-configuration" class="btn btn-dark bg-light-subtle border-light-subtle">Previous</a>
  <a href="?page=developing-extensions/React-components" class="btn btn-dark bg-light-subtle border-light-subtle">Next</a>
</div>
