---
layout: post
style: post
title: Saturday Night with Voxel Tycoon
category: devlog
redirect_from:
    - "/saturday-night"
    - "/2018/10/14/saturday-night"
---

Around three weeks ago we posted a [State of Affairs](/when) message, where we disclosed the actual state of development and talked about things left to do before we can ship the alpha. Here's a quick reminder of that list, with some added notes on what's changed:

<!--more-->

### Final tools

Building tools have greatly improved since last time. There are still some flaws and bugs to work out - for example, you can't build road intersections at the moment. Not cool! But, we are almost there. Given the fact that they've been in the works for almost 6 months, this is great news!

### Modular stations / Hubs

This is done! Woo-hoo!

![](/assets/weekreport/20181013-152913.png)

### Finalized UI

UI is receiving a lot of attention right now. It's starting to take shape into its final layout and "look". We are adding more and more working windows to the game - and those are final, for the alpha at least - no more changes required.

### Geological surveying

The concept for surveying is nearly finished, and it's ready for implementation.

### No updates yet

These things are still untouched from last time. However, we are not expecting any major difficulties here:

* Tech Tree / Research and Development
* Electricity
* Pipes / Liquids

## The most recent (and longest!) footage to date

For those who missed it, check out these 15+ minutes of raw footage, recorded from a recent build of the game.

<iframe class="widget-youtube" src="https://www.youtube.com/embed/eGKbHxh47Y4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Vehicle physics in action

Those who watched the video above may have noticed that the one piece was missing from our vehicle physics engine - taking load weights into account. Now, when a vehicle is running with more cargo aboard, it will require more power. This is especially noticeable when going uphill:

![](/assets/weekreport/phys2-0.gif)

We are finally satisfied with the physics engine, and it can be considered final. We are not going to alter it again until after the first alpha.

## Assets are dead. Long live mods!

One more important milestone here is that built-in assets have been completely replaced with moddable ones!

<div class="img-inline-left-container">
    <img src="/assets/weekreport/image_2018-10-11_22-02-48.png" style="margin-bottom: 6px" />
    <span class="img-alt">An example of Unity editor extension authored by us to edit built-in assets palette</span>
</div>

A bit of history: in the first year of development, we mostly focused on getting a playable prototype to work. Despite the fact we were committed to making the game's content moddable from day one, to make the prototype function, we used assets that relied on Unity's built-in system. It worked well, and we even coded a bunch of Unity Editor extensions to handle these assets.

However, as the base game was established, it was obvious that built-in assets have limitations that we should overcome to make modding as accessible and flexible as possible. So, we developed our own asset pipeline, released with [SDK 2.0](/sdk). Every new asset added since then was developed for the new system and, therefore, is moddable.

Through development, there were a lot of existing old-fashioned assets using the base Unity system. However, every time we've touched stuff related to an asset, like when we need to add new data or behaviour to it, then we take the extra step to convert it to the new system. And today, finally, this process is finished!

## One more thing

After the previous post, we received tremendous support, with people even saying things like *"C'mon, take your time, we'll wait until 3018!"* Hmm, actually, that's an idea... just kidding.

On one hand, you guys are right - the more we work on the game, the more polished it will become. But on the other hand, it's going into Early Access after all, which is meant to, well, give *early access* to games. We've already held back the release for a long time, and we need to draw the line somewhere. At some point, we need to say, "Let's give the game to players and start gathering feedback!" Then we'll fix, improve, update, and repeat. Bugs and problems will be in the alpha anyway, that's why it's an alpha!

Long story short, our goal is to release the game in a few months. Thank you for believing in us, we're doing our best not to fail you.

As usual, we encourage you to join our [Discord](http://discord.gg/64KPWd5) and share your thoughts with us or the community.

<p style="text-align: center">
    <img style="width: 140px;" src="/assets/pumpkin50.png"/>
</p>