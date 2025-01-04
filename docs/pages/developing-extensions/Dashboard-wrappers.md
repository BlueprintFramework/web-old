<div class="position-relative p-4 text-body bg-body border rounded-4 d-flex align-items-center">
  <div class="me-3">
    <i class="bi bi-book h2"></i>
  </div>
  <p class="me-3 my-0">
    Written by those who've walked the path. Want to improve our guides? Contribute and help build something awesome!
  </p>
  <a href="https://github.com/BlueprintFramework/web/tree/main/docs/pages/developing-extensions">
    <button class="btn btn-primary px-4 rounded-pill placeholder-wave" type="button">
      Contribute
    </button>
  </a>
</div><br>

# Dashboard wrappers
<h4 class="fw-light">Extend Pterodactyl's interface by injecting your own code.</h4><br/>

Blueprint provides wrappers for both admin and client dashboards, allowing you to seamlessly integrate your extension's code into every page. This is useful for adding scripts, modifying the UI, or extending functionality across the entire panel.

## Setting Up
Configure your wrappers in `conf.yml`:

```yaml
# conf.yml

admin:
  views: views.blade.php
  wrapper: wrapper.blade.php 
```

## Basic Usage
Create a wrapper file at the path specified in your `conf.yml`:

```php
<!-- wrapper.blade.php -->
@php
    $user = Auth::user();
@endphp

@if($user && $user->root_admin)
    <script src="/js/example.js"></script>
@endif
```

## Going Further
You can do much more with wrappers:
- Load different assets based on user roles
- Include dynamic configuration
- Add conditional content
- Integrate with Laravel's features

## Common Pitfalls
- **Loading Order**: Your wrapper loads after Pterodactyl's main content
- **Performance**: Keep wrappers lightweight - they run on every page load

Need help? Join our Discord community!

## Navigation
<div class="btn-group docs-navigator" role="group" aria-label="Navigation" style="float: right">
  <a href="?page=developing-extensions/Admin-configuration" class="btn btn-dark bg-light-subtle border-light-subtle">Previous</a>
  <a href="?page=developing-extensions/React-components" class="btn btn-dark bg-light-subtle border-light-subtle">Next</a>
</div>
