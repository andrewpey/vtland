---
layout: default
title: SDK // VOXEL TYCOON
header: SDK
wrapper: faq
---

<style>
a
</style>

## What is it?

This is a stripped version of the game that contains tools allowing you to customize, preview and test any 3rd-party content in the actual game's environment.

[![](/assets/sdk/sdk2.png)](/sdk#downloads){:.clear}

## Downloads

* [Windows](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoon.zip)
* ~~macOS~~ `coming soon`
* ~~Linux~~ `coming soon`

## System requirements

* Windows 64bit Vista SP1 or later
* DX11-compatible video card
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

## Error reporting

Please send log file that can be found at `%APPDATA%\..\LocalLow\Ehhou\VoxelTycoon\output_log.txt` to [dev@voxeltycoon.xyz](dev@voxeltycoon.xyz)