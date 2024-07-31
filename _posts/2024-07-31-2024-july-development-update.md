---
title: "Development Update"
thumb: /assets/posts/2024-july-development-update/thumb.png
thumb_square: /assets/posts/2024-july-development-update/thumb_square.png
---

{% include img.html src="/assets/posts/2024-july-development-update/3.png" %}

Hey there, Voxel Tycoon community!

In today's development update, we'll take a detailed look at the recent QoL updates and discuss what's happening with VT development overall.


Many of the improvements and fixes recently implemented were based on direct feedback from players in the `#bug-reports` and `#suggestions` channels on our [Discord](//discord.gg/voxeltycoon). We encourage you to join and share your thoughts with us and the community!

## UI optimization

It's interesting how UI can significantly impact game performance when it starts to hit its limits. While the Voxel Tycoon UI easily handles the content the vanilla game provides, when you start playing with many mods, you can begin to see its weak spots.

The most obvious one appeared to be the Buy window. If you play with many vehicle mods, it could take up to a several minutes (!) to open it the first time, and then cause insane FPS drops while it is open (from 200 to 5 FPS in the case below).

{% include video.html src="/assets/posts/2024-july-development-update/4.mp4" alt="This was captured on a developer PC which has enough RAM, GPU, and CPU power to spare." %}

So, we [did some optimizations](/changelog#0.88.9), and here's what we got. You can have as many vehicle mods as you want — the Buy vehicle window now opens immediately regardless and consumes a much smaller portion of frame time while it is open.

{% include video.html src="/assets/posts/2024-july-development-update/5.mp4" %}

There were a few other places where playing mod-heavy games caused huge lag spikes and FPS drops: the New game window (specifically the Mods tab) and storage picker popups. Those were optimized as well and now open immediately.

One more place where we applied optimization wasn't affected by mod count, but rather by the size of your empire. It's the Fleet window. Now, you can monitor hundreds of vehicles on your company's balance without significant performance drops.

As a bonus, after all the optimizations, the game can use up to **~500MB** less memory in mod-heavy games.

> If you want to know more details on what caused such drastic performance drops and how we optimized them out, let us know! We'll do a separate post on this (this one is already quite big).

Optimizing performance is an ongoing effort, and there are still many areas where it can be greatly improved. But for now, we want to focus on gameplay features in the next updates.

## Camera Bookmarks

You can [now](/changelog#0.88.7) set specific camera positions as bookmarks using <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>0-9</kbd> and quickly return to those spots with <kbd>Shift</kbd>+<kbd>0-9</kbd>. This is incredibly useful for managing your empire, allowing you to jump between key locations with ease, while there's no mini-map (which is planned).

We're also going to add dedicated UI for the bookmarks in future updates.

## Orthographic (aka isometric) camera received some 💜

Some of you may not even be aware that this camera mode has been in the game from the very beginning! And now it's finally officially fully supported.

{% include video.html src="/assets/posts/2024-july-development-update/2.mp4" %}

It [now](/changelog#0.88.8) locks to 45-degree angles and top-down views, and remains consistent between sessions. There's a new HUD button to toggle this mode, though the <kbd>F9</kbd> hotkey is still available for those who prefer keyboard shortcuts.

{% include video.html src="/assets/posts/2024-july-development-update/1.mp4" %}

While making these improvements, we also fixed a few camera-related bugs, like conveyors not being correctly picked in isometric view ([699](https://github.com/voxeltycoon/issues/issues/699)).

## Hotkeys to toggle windows

We added hotkeys to toggle some essential windows: <kbd>F2</kbd> for Fleet, <kbd>F3</kbd> for Research; others are not bound by default and can be set to your preferences.

{% include img.html src="/assets/posts/2024-july-development-update/1.png" %}

## Other minor changes

### Vehicle replacement changes

After some time playing with vehicle replacement, it became clear that in most cases, players want to replace only existing vehicles and not the ones bought after a replacement order is issued. If a player decides to buy a vehicle they've set up to be replaced, they probably intend to keep it.

So, we made vehicle replacements affect only vehicles that were present at the moment of replacement creation. This also allowed for auto-removal of completed replacements, eliminating the need to manually clean up completed vehicle replacement orders.

### Fixing notification log flaws

We noticed that many players (including ourselves) instinctively move the cursor to the top right corner of the notification log to hide it. However, instead of a close button typically found in this location, there is a notification settings button.

The notification log can be hidden by clicking on its entire header. This was designed so that when you click on the notification counter to bring up the log, you can hide it again without moving the cursor. As a result, a separate hide button wasn't deemed necessary, and when we needed to add a settings button, we placed it in the corner. However, we didn't account for the power of habit.

To address this, we have placed the collapse button where it is expected to be and moved the settings button to the left. You can still hide the log by clicking on its header.

{% include img.html src="/assets/posts/2024-july-development-update/2.png" %}

Also, one might expect that hitting <kbd>Esc</kbd> while the notification log is expanded will close only it, but instead, a random window (usually the one on top) was closed as well. Now only the notification log will hide on Esc.

## What's next?

As many of you know, we are currently working on the Rails and Roads Rework (aka RRR): a new rail and road laying system that will replace the current one and allow for:

* Level crossings
* Customizable curvature of tracks
* Left-hand traffic
* Diagonal roads
* One-way roads
* Horizontally curved bridges and tunnels
* Planning mode
* Support for blueprints
* Support for path signals
* Better support for modding and interconnection of different types of tracks
* Support for liquids/pipes
* Performance optimizations

It turned out to be much more complex than we initially anticipated. But it's necessary to complete before adding new content to the game, so we've been dedicating a lot of time to it. As a result, other major updates were, if not put on hold, at least slowed down. As you can imagine, this may create the appearance that no more major updates are coming for the game, and, quote, the *game is dead*.

Some of our most devoted community members may remember that the game was initially supposed to be out in Early Access by the end of 2017. But it came out in 2019 as pre-alpha, and only in 2021 did it hit Steam EA.

So, the game isn't *dead*; this is just how we develop it. And it has always been the case; there's nothing new. We prioritize quality over speed of development, and this isn't going to change. Sometimes updates come one after another; sometimes there's complete radio silence because we're just not ready to show anything. We release new updates only when we feel they're up to the bar we've set. And keep in mind that there are just two of us (we tried to hire more people in the past, but it didn't work out for us, both financially and organization-wise).

The good news is, RRR is progressing, and we can see the light at the end of the tunnel. We'll post more on this progress when we're ready. For now, enjoy some of the development artifacts. We occasionally post these in the #dump channel on our `#dump` channel on our [Discord server](//discord.gg/voxeltycoon). If you're interested in early sneak peeks, please join us there!

{% include img.html src="/assets/posts/2024-july-development-update/5.png" %}
{% include img.html src="/assets/posts/2024-july-development-update/3.jpg" %}
{% include img.html src="/assets/posts/2024-july-development-update/6.jpg" %}
{% include img.html src="/assets/posts/2024-july-development-update/6.png" %}
{% include img.html src="/assets/posts/2024-july-development-update/7.jpg" %}
{% include img.html src="/assets/posts/2024-july-development-update/7.png" %}
{% include img.html src="/assets/posts/2024-july-development-update/8.png" %}
{% include img.html src="/assets/posts/2024-july-development-update/9.jpg" %}
{% include img.html src="/assets/posts/2024-july-development-update/10.jpg" %}
{% include img.html src="/assets/posts/2024-july-development-update/2.jpg" %}
{% include img.html src="/assets/posts/2024-july-development-update/11.jpg" %}
{% include img.html src="/assets/posts/2024-july-development-update/12.jpg" %}
{% include img.html src="/assets/posts/2024-july-development-update/13.jpg" %}
{% include img.html src="/assets/posts/2024-july-development-update/14.jpg" %}
{% include img.html src="/assets/posts/2024-july-development-update/15.jpg" %}
{% include video.html src="/assets/posts/2024-july-development-update/theresnolevelcrossing.mp4" %}

## Updated roadmap

We've moved [our roadmap](/roadmap) to GitHub, aligning it more closely with our development process. Here you can see what we're working on right now and what will be worked on in the future. We will keep it up to date with our current direction.

{% include img.html src="/assets/posts/2024-july-development-update/4.png" %}

The roadmap has two views: **Board** (like it was before) and **Table** for a better overview. Notice that you can filter and slice data to [your liking](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view).

## On modding docs

The final issue we need to address is modding documentation. It's clearly lagging behind, and unfortunately, it's challenging to keep it current while the game is in active development. Don't worry, we'll update it eventually. In the meantime, we encourage you to join the `#modding` channel on [Discord](//discord.gg/voxeltycoon) to get assistance and discuss your ideas with our fantastic modding community.

## Thank you!

We really appreciate your patience and support. Thank you for being part of the Voxel Tycoon community, and stay tuned for more exciting updates!