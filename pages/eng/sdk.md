---
layout: default
style: sdk
title: Modding // VOXEL TYCOON
header: Modding
permalink: sdk
redirect_from:
    - /modding
redirect_to:
    - https://github.com/voxeltycoon/docs/wiki
---

## Where's SDK 2.0?

All required tools to create mods are now [bundled with the game](/buy).

## Documentation

All modding docs are currently hosted [here](https://github.com/voxeltycoon/docs/wiki) (look at the menu on the right).

The best starting point is this tutorial: [Creating your first content mod](https://github.com/voxeltycoon/docs/wiki/Creating-your-first-content-mod)

## Design guidelines

Do not try to exactly mimic real life representation, but rather try to get fancy nice-looking feel that fits the game overall style.

You can notice that our models are:

* Much shorter than their prototypes
* Can have different count of axles
* Not overdetailed but still recognizable
* Vivid and toy-ish looking
* The biggest buildings have maximum size of `5x5x10`

{% include img.html src="/assets/sdk/guidelines/20180417-141213-1.png"
src2="/assets/sdk/guidelines/20180417-141213.png" %}

{% include img.html src="/assets/sdk/guidelines/Layer3.png"
src2="/assets/sdk/guidelines/Layer2.png" %}

{% include img.html src="/assets/sdk/guidelines/dbv200.png"
src2="/assets/sdk/guidelines/dbv200-1.png" %}

Use vivid colors instead of faded ones, but not too much:

{% include img.html src="/assets/sdk/guidelines/3a-1.png" src2="/assets/sdk/guidelines/3a.png" src3="/assets/sdk/guidelines/3b.png" %}

Darker windows look better. Consider using predefined colors:

{% include img.html src="/assets/sdk/guidelines/2a.png"
src2="/assets/sdk/guidelines/2b.png" %}

Consider some parts of the model to use smooth shading:

{% include img.html src="/assets/sdk/guidelines/2.png"
src2="/assets/sdk/guidelines/1.png" %}

Another example:

{% include img.html src="/assets/sdk/guidelines/1a.png"
src2="/assets/sdk/guidelines/1b.png" %}

All of that is just a recommendation and not hard rules. Be creative!