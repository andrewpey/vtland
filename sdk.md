---
layout: default
title: SDK // VOXEL TYCOON
header: SDK
wrapper: faq
---

## What is it?

This is a stripped version of the game that contains tools allowing you to customize, preview, and test any 3rd-party content in the actual game's environment.

<iframe width="680" height="382" src="https://www.youtube.com/embed/txoYrQ88GzM" frameborder="0" allowfullscreen></iframe>

## Downloads

* [Windows](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoon.zip)
* [macOS](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoonMac.zip) (see [Known issues](#known-issues))
* [Linux](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoonLinux.zip)

[Release notes](#release-notes)

## System requirements

* 64bit Windows Vista SP1+ / Mac OS X 10.9+ / Ubuntu 12.04+
* DX11 / OpenGL Core 4.1 / Metal compatible video card
* 2GB+ RAM
* Curiosity

## Documentation

> Detailed documentation will come later. You can help us by making your own tutorials. A little one can be found on [legacy page](/sdk_legacy).

> You can always get help on our [#modding](https://discord.gg/dXBmWRr) channel at Discord.

Quick tips:

* If you have assets from legacy SDK, just put it into new folder in `Content` directory and **Asset Aditor** will convert them for you.
* Root folders in `Content` directory are considered as different mod packs.
* All **URI** has the following structure: `{pack_name}/{file_name}`, eg. `your_first_pack/mesh.obj`. The actual path to the file inside the pack folder doesn't matter.
* All **URI** should be lowercase. It's recommended to keep asset names in lowercase also to avoid possible caveats.
* Only `.obj` is supported for meshes at the moment.

## Design guidelines

Do not try to mimic real life representation, but rather try to get fancy nice-looking feel that fits the game overall style.

You can notice that our models are:

* Much shorter then their prototypes
* Not overdetailed but still recognizable
* Vivid and toy-ish looking

<img src="/assets/sdk/guidelines/20180417-141213-1.png" class="compare-item" />
<img src="/assets/sdk/guidelines/20180417-141213.png" class="compare-item last" />

<img src="/assets/sdk/guidelines/Layer3.png" class="compare-item" />
<img src="/assets/sdk/guidelines/Layer2.png" class="compare-item last" />

Use vivid colors, but not too much:

<img src="/assets/sdk/guidelines/3a-1.png" class="compare-item" />
<img src="/assets/sdk/guidelines/3a.png" class="compare-item last" />
<img src="/assets/sdk/guidelines/3b.png" />

Darker windows are looks better. Consider using predefined colors:

<img src="/assets/sdk/guidelines/2a.png" class="compare-item" />
<img src="/assets/sdk/guidelines/2b.png" class="compare-item last" />

Consider some parts of the model to use smooth shading:

<img src="/assets/sdk/guidelines/2.png" class="compare-item" />
<img src="/assets/sdk/guidelines/1.png" class="compare-item last" />

Another example:

<img src="/assets/sdk/guidelines/1a.png" class="compare-item" />
<img src="/assets/sdk/guidelines/1b.png" class="compare-item last" />


All of that is just a recommendation and not hard rules. Be creative!

## Known issues

### Loading can stuck at `Loading Assets` message on MacOS

This probably caused by macOS sandbox. Run this command in Terminal to mark app as safe:

`$ xattr -dr com.apple.quarantine PATH_TO_UNZIPPED_FOLDER` e.g.<br/>
`$ xattr -dr com.apple.quarantine ~/Downloads/VoxelTycoonMac`

## Error reporting

You can report issues to https://github.com/andrewpey/open-voxel-tycoon/issues. Please ensure no such issue was reported earlier!

Logs locations:

* Windows: `%APPDATA%\..\LocalLow\VoxelTycoon\VoxelTycoon\output_log.txt`
* macOS:	`~/Library/Logs/Unity/Player.log`
* Linux:	`~/.config/unity3d/VoxelTycoon/VoxelTycoon/Player.log`

## Release notes

*4/15/18*

UI

* Edge pan (in fullscreen)
* `WASD` and `←↑↓→` to pan (hold `Shift` to rotate)
* Added persistent settings to toggle music and VSync
* Vehicles moving/stopped state is also persistent (thanks **Alego22**!)

API changes

* More than one smoke per train unit now supported (thanks **TransCanadaLimited**!)

Other

* Added macOS and Linux versions
* Added sample `steam.trainsound`
* If mesh has no normals they will be autocalculated
* Fixed obj importer generates extra triangles (thanks **Alego22**!)
* Fixed asset editor does not respect mesh bounds if it was hot-reloaded (thanks **Alego22**!)
* Fixed wires do not want to explode (thanks **firestarspelt**!)

*4/10/18*

* Initial release of SDK 2.0

*8/10/17*

* Initial release of [Legacy SDK](/sdk_legacy)