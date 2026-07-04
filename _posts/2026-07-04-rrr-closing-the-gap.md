---
title: "RRR: Closing the Gaps"
thumb: /assets/posts/rrr-closing-the-gaps/thumb.png
---

Hey!

We want to give a small follow-up on the Rails and Roads Rework and clarify where things stand right now.

In the [previous development update]({% post_url 2025-12-30-2025-winter-development-update %}), we showed the direction of the new system and some of the features it makes possible: level crossings, more flexible junctions, better road connectivity, one-way roads, support for future systems like pipes, and more.

Since then, the core construction flow has continued moving forward. At this point, basic construction in the new system is working. That is an important milestone for us, because this rework is not just a visual change or a new building tool. It is a replacement of one of the oldest and most limiting parts of the game.

## What is holding us back right now

The main remaining work is making the new system complete enough to be playable in real situations, not just in isolated test cases.

One of the biggest parts of that is bridges and tunnels. In the current version of Voxel Tycoon, bridge and tunnel construction is one of the least obvious parts of building. With the new system, we do not want to simply recreate the same limitations with a nicer interface. We want bridges and tunnels to feel like a natural part of construction.

{% include img.html src="/assets/posts/rrr-closing-the-gaps/14.png" %}

This is more complicated than it may sound, because the new system allows much more flexible layouts. Bridges and tunnels are no longer limited to simple straight pieces. They can be curved, and they can also include junctions and crossings. That gives players much more freedom, but it also creates many more edge cases that need to work reliably.

The other big area is performance. The old system relied much more on pre-made pieces. The new system generates geometry on the fly, which gives us a lot more flexibility, but also makes rendering more demanding. We are already working on optimization in parallel, but there is still more to do before we are comfortable putting this into players' hands.

{% include img.html src="/assets/posts/rrr-closing-the-gaps/3.png" %}

## What happens next

Once the core functionality is assembled into a minimally playable state, we will publish a new [beta](/beta) for interested early testers.

The first beta will not mean the whole rework is finished. It will be a testing step: getting the system into real maps, real saves, and real player-built layouts, so we can find the problems that only appear outside our own development environment.

{% include img.html src="/assets/posts/rrr-closing-the-gaps/6.png" %}

After the new construction system is in place, it should finally unblock a lot of gameplay work that has been waiting behind it. A more flexible network foundation is important not only for roads and rails themselves, but also for future systems connected to traffic flow, logistics, infrastructure planning, signals, pipes and liquids, blueprints, and other [roadmap](/roadmap) features.

## A note for new players

Voxel Tycoon is still an Early Access game, and we want expectations to be clear. If you are looking for a fully finished experience right now, it may be better to wait.

At the same time, the current version is already very playable, and many players have spent dozens or even hundreds of hours building networks, optimizing production chains, and experimenting with mods. The modding community has also added a lot of life to the game, and we are very grateful for that.

We know the wait has been long. We also know that communication has not always been frequent enough. We understand that some of the frustration comes from people caring deeply about the game and wanting to see it reach its potential. We are a very small team, and real life sometimes affects development more than we would like, but we should still do a better job of showing where the work stands and what remains.

In the meantime, you are very welcome to join our [Discord](//discord.gg/voxeltycoon) to follow player discussions, ask questions, share your own builds, and catch occasional smaller updates from us that do not always become full devlog posts. Below are a few recent work-in-progress examples, including the kind of smaller snippets we share there:

{% include video.html src="/assets/posts/rrr-closing-the-gaps/1.mp4" %}

{% include img.html src="/assets/posts/rrr-closing-the-gaps/1.png" %}

{% include img.html src="/assets/posts/rrr-closing-the-gaps/4.png" %}

{% include img.html src="/assets/posts/rrr-closing-the-gaps/13.png" %}

{% include img.html src="/assets/posts/rrr-closing-the-gaps/8.png" alt="A stress test with a huge number of tracks visible at once (tens of millions of polygons here)." %}

{% include img.html src="/assets/posts/rrr-closing-the-gaps/7.png" alt="The void." %}

{% include img.html src="/assets/posts/rrr-closing-the-gaps/12.png" alt="Naturally, things constantly do not work the way they should." %}

{% include img.html src="/assets/posts/rrr-closing-the-gaps/10.png" %}

{% include img.html src="/assets/posts/rrr-closing-the-gaps/9.png" alt="Spaghetti-driven development." %}

{% include img.html src="/assets/posts/rrr-closing-the-gaps/11.png" %}

{% include img.html src="/assets/posts/rrr-closing-the-gaps/15.png" %}

{% include img.html src="/assets/posts/rrr-closing-the-gaps/5.png" %}

{% include video.html src="/assets/posts/rrr-closing-the-gaps/2.mp4" alt="It just goes on and on." %}

Thank you for your patience, feedback, criticism, mods, screenshots, bug reports, and for still checking in on the game. It means a lot to us 💜
