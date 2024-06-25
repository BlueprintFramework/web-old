<span class="badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill"><i class="bi bi-check-lg"></i> Latest</span>
<span class="badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill"><i class="bi bi-hash"></i> Supported</span>
# beta-F248
<br/>

#### Changes
- Add `TelemetryService`'s api endpoint to `PlaceholderService` so it can easily be changed everywhere at once.
- Add new developer [flag](?page=documentation/flags) called `developerKeepApplicationCache` that skips flushing application cache when installed with `-build`.
- Don't replace `RouteServiceProvider` for Blueprint's Laravel routes. ([#33](https://github.com/BlueprintFramework/framework/pull/33))
- Blueprint's admin page no longer collects telemetry as it's not a useful data point anymore.
- [`BlueprintExtensionLibrary`](?page=documentation/$blueprint) now has it's functions documented inside of the codebase, enabling easier development with IDEs. (Suggested by [@itsvic-dev](https://github.com/itsvic-dev/))
- Add a brand new `dbForget()` function to [`BlueprintExtensionLibrary`](?page=documentation/$blueprint) that allows for deleting/forgetting database records.
- Add additional placement options for the server's "Terminal" page to [Components.yml](?page=documentation/componentsyml). ([#34](https://github.com/BlueprintFramework/framework/pull/34))
- Extension buttons have been redesigned once again and should now look more recognizable for each extension.
- We've added new marketing material and updated Blueprint's default logo. This includes new versions of Blueprint's icon and full-res images of our stickers.
- Add a choice for putting the application in maintenance mode when installing/upgrading Blueprint.
- No longer use folder placeholders for navigating to the Pterodactyl directory. ([#40](https://github.com/BlueprintFramework/framework/pull/40))
- The extensions page now shows a "<code><icon name="gear-fill"></icon> System</code>" badge on system extensions (such as Blueprint).
- Add a new **Console** extension API which allows for creating new Artisan commands and automatically running them with intervals.

<br/>

#### Bugfixes
- Input validation wasn't done correctly on Blueprint's own admin settings page, this should now be validated better.
- Custom Laravel routes for extensions were not unlinked correctly when using `-remove` to remove an extension.
- `logFormat.sh` used `tput` for coloring logs, which was not checked as a dependency by `blueprint.sh`.
- Fix bad exit code in `blueprint.sh`. ([#32](https://github.com/BlueprintFramework/framework/pull/32))
- `ServerRouter.tsx` still had a leftover debug line, this has now been fixed. (Reported by [@ArnaudLier](https://github.com/ArnaudLier))
- Extension information values could not contain the `&` character. Doing so would break some pages. (Reported by [@0x7d8](https://github.com/0x7d8))
- Extension-provided scripts were sometimes ran with root permissions, which was not intentional.
- Fixed a typo in Blueprtint's installation log. ([#38](https://github.com/BlueprintFramework/framework/pull/38))
- `SettingsContainer.tsx` was extended by the backups component, which was not intentional. (Reported by [@itsvic-dev](https://github.com/itsvic-dev/))
- Ending extension identifiers with `.blueprint` in `-install` no longer results in a error. ([#41](https://github.com/BlueprintFramework/framework/pull/41))
- - Fixed blueprint.sh not working due to poor merging (naughty ivy) ([46(https://github.com/BlueprintFramework/framework/pull/46))

<br/>

#### Breaking Changes
- Install, remove and export scripts may no longer be able to use colored logs.
- Export scripts need an additional flag ([`developerEscalateExportScript`](?page=documentation/flags)) to run with root-level perms, which might be needed in some cases.
- You can no longer change Blueprint's `$FOLDER` variable by parsing `$_FOLDER` upon first run of the script.
