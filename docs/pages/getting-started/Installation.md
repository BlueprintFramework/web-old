# Installation
<h4 class="fw-light">Learn how to install Blueprint on your Pterodactyl instance.</h4><br/>

<div class="alert alert-warning" role="alert">
  <i class="bi bi-exclamation-triangle-fill mb-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3">
  <strong>Important! </strong>
  Blueprint doesn't mix well with other modifications, so if you already have any, 
  <a href="https://pterodactyl.io/panel/1.0/updating.html" class="alert-link">perform a panel update</a> before moving on with this guide.</div>
</div><br/>


### **Prerequisites:**

**What you need:**
* [The latest release of Blueprint.](https://github.com/teamblueprint/main/releases/latest)
* [`unzip`](https://pkgs.org/download/unzip)
* [`zip`](https://pkgs.org/download/zip)
* [`curl`](https://github.com/curl/curl)
* [`git`](https://github.com/git/git)
* [`nodejs`](https://nodejs.org) (20.x or later)
* [`yarn`](https://yarnpkg.com/)
* A fully functional Pterodactyl installation.
* Linux and Pterodactyl knowledge.
* Common sense.

<br/>

### **Installation Steps**

**1.** Navigate to your Pterodactyl folder. (most likely `/var/www/pterodactyl`)

**2.** Install NodeJS, NPM and Yarn using the following commands. This assumes you are running Pterodactyl on Ubuntu or Debian-based systems.
```sh
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
apt-get update
apt-get install -y nodejs
npm i -g yarn
yarn
```
**3.** Download [the latest release of Blueprint](https://github.com/teamblueprint/main/releases/latest) and extract it (stable build) or pull the files via git (bleeding-edge build).

**4.** If you haven't already, place the Blueprint files inside of your Pterodactyl folder. (common location is `/var/www/pterodactyl`)

**5.** Run the Blueprint installation script. This runs the commands required for Blueprint to function correctly. If your Pterodactyl folder is not `/var/www/pterodactyl` you may need to put `_FOLDER="/path/to/pterodactyl"` in front of `bash blueprint.sh`.
```sh
chmod +x blueprint.sh
bash blueprint.sh
```
**6.** After waiting for the installation script to finish, open up your Pterodactyl admin panel and click on the puzzle icon in the top right of the website to verify your installation.
