---
title: 'Mass vehicle replacement, no more teleportation to depots, saves cloud sync, and more!'
thumb: /assets/posts/update-87/thumb.png
thumb_square: /assets/posts/update-87/thumb_square.png
---

Update 0.87 is finally here! Read below for a detailed introduction into what's new, or hop directly into the [full changelog](/changelog#0.87).

## Mass vehicle replacement

One of the major headaches of our tycoons finally gets its treatment.

Usually, once you research a new truck, locomotive, or rail car you want to replace your old slow and ineffective ones with it. Previously, to do so, you needed manually locate every single vehicle which could be upgraded, send it to a depot - by manually picking it - and then manually reconfigure it (or sell and buy a new one, but don't forget to assign the correct routes!)

Luckily, there's a new feature that will save you a few <s>thousand</s> clicks.

### Introducing mass vehicle replacement

{% include img.html src="/assets/posts/update-87/3.png" %}

And it's not just about *replacement* - you can mass *reconfigure* your vehicles, replacing exact railcars, or even changing what cargo they should transport.

Just choose what kind of vehicles should be affected, and specify how the result should look like. The game will do the rest for you: it will find a vehicle for replacement, send it to the nearest suitable depot, replace/reconfigure it, and then release it back to the route.

To avoid putting too much stress on your budget, you can set the required minimum amount of money on your balance before a vehicle will be sent for replace.

{% include img.html src="/assets/posts/update-87/4.png" alt="You can fine-tune the replacement process by specifying exact routes on what vehicles should be replaced." %}

Vehicles are sent for replace one by one to avoid clogging ways to depots, and to prevent  a substantial drop in supply rates.

### Future plans

While the current implementation should be a relief, we have more ideas on how we can make the process even more flawless. It works exactly like any other feature in VT - they're still a work in progress, and we plan to constantly work on improving every aspect of the game, together with you!

## No more teleportation (almost)

Speaking of sending vehicles to depots - before today, when you send a vehicle to a depot, it just stopped, then started reporting as going to a depot, and then - *poof!* - it just disappears, then magically shows in the depot. Implementing the mass vehicle replacement seemed like the perfect time to make vehicles properly go to depots (since we need to touch this part anyways) like it was always intended.

Now, when you hit the Send to depot button from the Vehicle window or the Fleet window, you will be prompted with these options:

{% include img.html src="/assets/posts/update-87/20211218-214726.png" style="inline-right" %}

* <b>Send to the nearest depot</b> - the game will pick the nearest depot which could serve the vehicle for you.
* <b>Send to the selected depot</b> - you can manually select the depot where you want the vehicle to arrive.
* <b>Tow to the selected depot</b> - if case the vehicle is really stuck and doesn't have a clear path to any depot, you still can ask <i>to tow</i> the vehicle to the depot of your choice. It essentially behaves almost like it was previously - teleporting the vehicle to the depot, but now it costs you money, so consider this as a last resort option.

## Saves cloud sync

Now, you can continue playing your favorite worlds on another computer from where you left it, thanks to [Steam Cloud](https://help.steampowered.com/en/faqs/view/68D2-35AB-09A9-7678) support.

{% include img.html src="/assets/posts/update-87/20211220-215718.png" %}

To enable cloud sync for exact save, open the Load Game window (or Save Game window) and then click the cloud icon in the upper left corner of the saved game card. This save will become available on any computer where you've logged in with your Steam account.

## Progression balance

Many of you have reported that cities grow too fast, and you quickly start to feel overwhelmed with business' demands. We are aware of this, and actually, we have several features planned that should deepen gameplay and at the same time address this issue.

While they are in the works, with this update we've reduced cities' growth speed by 25% as a temporary solution, so it should feel a bit more relaxed.

## Other improvements

### New status icons in the Fleet window

{% include img.html src="/assets/posts/update-87/2.png" %}

Now you can clearly differentiate when a vehicle is scheduled for replace, going to a depot, or already inside a depot.

### Space for pause

It's pretty common for tycoon games that hitting <kbd>Space</kbd> toggles pause. For some reason, that was not the case for Voxel Tycoon, but now it's fixed.

For new installs pausing the game will be set to <kbd>Space</kbd> by default. For existing players, current key bindings will be preserved. If you want to use <kbd>Space</kbd> for pause, reset key bindings at `Settings → Controls`.

### Multi-select rows with Shift

{% include video.html src="/assets/posts/update-87/video2.mp4" %}

You can now quickly select many items in checkbox lists by dragging through items or by clicking while holding <kbd>Shift</kbd>.

### Separate horn volume

{% include img.html src="/assets/posts/update-87/1.png" %}

The volume of vehicle horns now can be configured separately the from overall volume, if you find them too intruding.

### Analytics data management

To detect problems with the game performance early, we collect some anonymous data using services provided by Unity.

We know that for some of you it's important to understand what information the analytics service collects, so we made it accessible with ease. You can now open your personal data management page (`Game → Data collection settings`) and see what data are collected, or even completely opt-out from Unity’s data collection.

## Modding

### World generation mods

It was already possible for mods to override how worlds are generated. It was demonstrated by the amazing [Biome-izer](https://steamcommunity.com/sharedfiles/filedetails/?id=2617844263) mod, which not only richens your worlds with spectacular rivers, mesas, and other features but also provides a lot of new settings for biome assets for those modders who prefer to stay away from script mods (we can't blame you for that!).

However, making it possible was pretty hacky and prone to be broken with new updates. Now, the game provides `WorldGeneratorManager` which allows a modder to easily swap the vanilla worldgen with their own custom `IWorldGenerator` implementations.

{% include img.html src="/assets/posts/update-87/5.png" src2="/assets/posts/update-87/6.png" src3="/assets/posts/update-87/7.png" %}

### Global mods

Some mods would greatly benefit or even would be impossible to exist without the ability to work in the main menu (before the world is created). We are working in that direction, and hopefully will be able to make it real soon.

### Workshop filtering

With the number of mods increasing over time (thank you, dear modders!) it becomes pretty hard to navigate through the Workshop looking for a new mod to try. To help players with that, Workshop items could have tags (like *Vehicles*, *Buildings*, *Worldgen*, etc) to filter by them.

Currently, there's no way to specify a tag when uploading a mod, but we plan to add support for it with the next minor update.

## What's next

Now, as we have a way to automatically send vehicles to depots, and players can effortlessly replace them when needed, it feels natural to start introducing vehicles' wear and obsolescence. We expect to introduce these concepts with one of the next updates.

In parallel, we continue to iterate on the monumental rails and roads rework. We are absolutely aware that the current implementation - while obviously working in most cases - is a source of great frustration for players.

The new system not only should make building a much more pleasant experience, but introduce many new interesting features, like so:

* Level crossings
* Customizable curvature of tracks
* Left-hand traffic
* Diagonal roads
* One-way roads
* Horizontally curved bridges and tunnels
* Planning mode
* Support for blueprints/templates
* Performance optimizations

We have no estimate to share at this point but expect to hear about it more often with future updates.

{% include img.html src="/assets/posts/update-87/1.jpg" %}

## That's it for today!

We want to remind you that we are still in the Early Access stage. All the new features above are not something set in stone and are subject to change and improvement as the game is getting further developed.

Your feedback is very important in this process, and we highly encourage you to share any thoughts with us and the community on our [Discord](http://discord.gg/voxeltycoon), [discussion board](/suggestions).

Happy Holidays, and see you next year! 🎁