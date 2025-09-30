<div class="position-relative p-4 text-body bg-body border rounded-4 d-flex align-items-center">
  <div class="me-3">
    <i class="bi bi-book h2"></i>
  </div>
  <p class="me-3 my-0">
    Written by those who've walked the path. Want to improve our guides? Contribute and help build something awesome!
  </p>
  <a href="https://github.com/BlueprintFramework/web/tree/main/docs/pages/getting-started">
    <button class="btn btn-primary px-4 rounded-pill placeholder-wave" type="button">
      Contribute
    </button>
  </a>
</div><br>

# Extension development
<h4 class="fw-light">Set up your extension development environment.</h4><br/>

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-pin-angle-fill mb-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3"><b>Developer mode</b> has to be turned on in your <b>admin panel</b> <p- class="opacity-50">(Admin > Extensions > Blueprint)</p-> before you can run developer commands. You only have to do this once.</div>
</div><br/>

### **Quick start**
Get started by beginning from a template, naming and describing your extension through the initialize command.

<div class="alert alert-danger mt-2 rounded-4" role="alert">
  <i class="bi bi-exclamation-octagon-fill mt-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3"><b>Extension identifiers should be lowercase a-z characters only.</b> Blueprint would normally stop you from installing/creating extensions that do not meet that standard, but there is a bug in <code>beta-2024-12</code> preventing it from doing so. <b>Extension identifiers not meeting this standard will not work in future versions</b> and can cause unexpected issues when installed.</div>
</div>

```sh
blueprint -init
```
When choosing a template, select `Barebones` to be able to follow along with this guide. Most options can be changed later, so don't procrastinate too much thinking of an extension name.

After running this command, you can now find your extension files in the `.blueprint/dev` directory (which is located inside of your Pterodactyl folder). You can use cd to change to this directory.
```sh
cd .blueprint/dev
```
<br>


### **Applying changes**
To apply any changes you've made and preview them on your panel, run the following developer command. This command installs extension files from `.blueprint/dev/` like it were a normal extension.
```sh
blueprint -build
```

<div class="btn-group docs-navigator" role="group" aria-label="Navigation" style="float: right">
  <button type="button" class="btn btn-dark bg-light-subtle border-0 text-secondary rounded-start-pill disabled">Previous</button>
  <a href="?page=developing-extensions/Admin-views" class="btn btn-dark bg-light-subtle border-0 rounded-end-pill">Next</a>
</div>
