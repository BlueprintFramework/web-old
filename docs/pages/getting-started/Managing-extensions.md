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

# Managing Extensions
<h4 class="fw-light">Install, remove, and configure Blueprint extensions.</h4><br/>

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-exclamation-diamond mb-1 text-warning float-start fs-4"></i>
  <div class="ps-3 ms-3">Blueprint extensions must be installed, updated, built and removed via the command line. Shell access is required to perform these actions.</div>
</div><br/>

### **Upload Extensions**

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-exclamation-diamond mb-1 text-info float-start fs-4"></i>
  <div class="ps-3 ms-3">Before wanting to install any blueprint extensions, you first need to upload the files to your server where Blueprint is installed on by using an SFTP client program.</div>
</div><br/>

Before wanting to install any blueprint extensions you need to upload them to your server where your pterodactyl panel with blueprint is running on.<br>

For that you can use a software called <strong><a href="https://winscp.net/eng/index.php">WinSCP</a></strong>.
<br>
<br>
If it is your first time using these kind of tools (SFTP clients), fear not! I will guide you through the connection process to your server. <strong><i>These steps are not including the WinSCP installation process, only the connection process</i></strong><br>
<br>
On the main window named "Login" with an lock icon, you will select "New Site" with File protocol set to SFTP and port number to 22, (It should be the default values, if they aren't you can just put them manually its okay), the "Host name:" text zone is your server public IP, for your username you will enter "root".<br>
<br>
Now that you are halfway through it you just need to either enter your root user password or if you have an SSH key you can click on "Advanced...", in the SSH section select "Authentication", and choose your SSH private key in the "Authentication parameters" (An SSH key is a file ending most of the time by .ppk) once you have finished selecting your SSH key you can back out by clicking on "Ok" and "Login" (third button starting from far down right)
<br>
an SSH key is a lot more secure than a simple password and is preferred but will still work<br>
<br>
You can click on this link to <a href="https://winscp.net/download/files/20250511150014dcc4e6cb3ecdb410d0a1017fffe9ad/WinSCP-6.5.1-Setup.exe">download WinSCP 6.5.1 Setup</a> directly. (Directly meaning that it will immediately download the installer)
<br>

### **Install Exstensions**

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-exclamation-diamond mb-1 text-danger float-start fs-4"></i>
  <div class="ps-3 ms-3"><strong>Only use extensions from trusted sources</strong> such as <strong><a href="/browse">Blueprint's extension repository</a></strong>, <a href="https://sourcexchange.net">sourceXchange</a> or <a href="https://builtbybit.com">BuiltByBit</a>. Third-party sources may contain unverified or malicious code.</div>
</div><br/>

To install a Blueprint extension, move the `.blueprint` file into your Pterodactyl root directory, usually `/var/www/pterodactyl`.<br>

Then run the following command in your terminal:
```sh
blueprint -install (extension)
```
Replace `(extension)` with the name of the extension or the exact filename of the `.blueprint` file. This will trigger the installation process.

<br>

### **Remove Exstensions**

To uninstall a Blueprint extension, run the following command:
```sh
blueprint -remove (extension)
```
Replace `(extension)` with the name of the extension you want to remove. This will safely remove the extension and its associated components.

<br>

### **Manage extension specific settings**

Once an extension is installed, you can configure its settings directly from the Pterodactyl admin dashboard.

1.  Log in to the admin interface.

2.  Click on the puzzle piece icon <i class="bi bi-puzzle-fill"></i> in the top-right corner to open the Extensions Overview.

3.  From here, select the extension you wish to manage.
    This will open a configuration view where you can adjust extension-specific options.

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-info-circle mb-1 float-start fs-4"></i>
  <div class="ps-3 ms-3">Settings interfaces are defined by the extension developer and may vary depending on the extension. Some even don't have settings at all.</div>
</div><br/>
