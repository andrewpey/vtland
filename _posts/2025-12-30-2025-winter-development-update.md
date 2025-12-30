---
title: "Development Update: Rails and Roads Rework"
thumb: /assets/posts/2025-winter-development-update/thumb.png
thumb_square: /assets/posts/2025-winter-development-update/thumb_square.png
---

{% include video.html src="/assets/posts/2025-winter-development-update/1.mp4" %}

As the year comes to an end, we wanted to share the current state of the **Rails and Roads Rework** and what it enables going forward.

Below is a look at some of the things currently coming together. Some important pieces have finally clicked, which lets us move forward with much more confidence.

## Why the Rails and Roads Rework exists

{% include img.html src="/assets/posts/2025-winter-development-update/9.png" %}

For those who joined us recently, it’s worth explaining why this rework is happening at all.

The original rails and roads systems quickly reached their limits, to the point where adding things like level crossings, more complex intersections, or multi-lane traffic would have meant piling more special cases and compromises on top of an already stretched, but quite rigid foundation.

RRR is about rebuilding these systems properly so rails, roads, and related infrastructure (such as conveyors and pipes) interact consistently, scale better, and support features that were either impossible or extremely fragile before.

This is not a set of incremental tweaks on top of the existing systems. It’s a full rework, which means that many of the current rails and roads features have to be carefully migrated and adapted to the new foundations rather than simply extended in place.

In terms of complexity, this puts us in the same problem space as large transport and city-building games, particularly when it comes to procedural geometry and systemic interactions between networks. At the same time, Voxel Tycoon has an additional constraint: everything is tightly bound to a grid. Making systems of this complexity work reliably within those limits is a significant technical challenge, and a big part of why this rework takes time.

It’s also worth saying that Voxel Tycoon was our first game of this scale. With the knowledge and experience we had at the time, building a system like this simply wasn’t realistic. Over the years, we’ve gained a lot of experience and important insights, and this rework is the result of that growth.

It’s a necessary rebuild that gives the game a much stronger base for the future.

## New road foundations

The new road system is far more flexible under the hood. It supports more complex layouts and gives us room to expand without hacks and limitations we’ve been fighting before.

This foundation is what makes all of the features below possible.

### Level crossings

{% include video.html src="/assets/posts/2025-winter-development-update/3.mp4" %}

Level crossings have been one of the most requested features for a long time, and their absence has been a major pain point for many players.

They are now part of the new road system. This includes proper interaction between roads and rails, correct geometry, and a foundation for barriers. The remaining work is mostly about behavior — in particular, making vehicles reliably stop at barriers and perform their primary function of preventing accidents at crossings.

Note that level crossings are not meant to provide absolute safety. If you need full separation and guaranteed safety, tunnels and bridges remain the best solution. The good news is that the new system makes these options more flexible as well — including support for branching inside tunnels.

There’s still work ahead, but level crossings are no longer a distant “someday” feature and are now part of the core system being developed for the upcoming update.

### One-way roads

{% include img.html src="/assets/posts/2025-winter-development-update/4.jpg" %}

One-way roads are now supported and allow players to control traffic flows much more precisely. This makes it easier to design efficient layouts, reduce congestion, and guide vehicles where they’re actually needed.

### Multi-lane roads

{% include img.html src="/assets/posts/2025-winter-development-update/5.png" %}

Support for multi-lane roads is now part of the underlying system. We’re still not fully sure in what form — or even whether — multi-lane roads will make it into the base game, but having this support gives us much more flexibility going forward. It has also allowed us to actively test the limits of the new system and better understand how far it can be pushed.

### Junctions and crossings

{% include img.html src="/assets/posts/2025-winter-development-update/6.png" %}

The new junction system supports fully procedural junctions at arbitrary angles — technically anywhere within 360 degrees, not just a fixed set of directions. In practice, intersections in the game follow the grid, so players normally build junctions at 90° or 45°. At the same time, supporting arbitrary angles is necessary to handle more complex layouts and edge cases internally.

{% include video.html src="/assets/posts/2025-winter-development-update/2.mp4" %}

This flexibility makes it possible to support some fairly unusual combinations — for example, rails crossing over conveyors — while still behaving in a clean and consistent way.

### Road details: markings, poles, structure

{% include img.html src="/assets/posts/2025-winter-development-update/10.png" %}

Lane markings, poles, and other road details are being integrated directly into the system instead of being separate hacks. These elements now follow the same rules as the roads themselves, align correctly with geometry, and adapt automatically to different layouts. This improves visual consistency and makes it much easier to extend and refine road visuals in the future without adding special cases.

### Pipes and fluid systems

{% include img.html src="/assets/posts/2025-winter-development-update/2.jpg" %}

With the new system in place, supporting pipes becomes largely trivial from a technical standpoint. They can be generated properly, bend smoothly, and integrate naturally with the rest of the infrastructure. This finally opens the door to entirely new mechanics, such as working with liquids.

### Road connectivity

{% include img.html src="/assets/posts/2025-winter-development-update/8.png" %}

A common source of frustration in the current version of the game has been problems with connecting different road segments in clean and predictable ways. This was a direct consequence of how rigid the old road system was. The new system eliminates this class of issues by design, allowing different road pieces and intersections to connect cleanly and predictably — including support for the infamous one-tile shifts that were previously impossible.

{% include video.html src="/assets/posts/2025-winter-development-update/5.mp4" %}

It also makes it possible to connect different types of roads together in a consistent and reliable way, something that was very hard to achieve with the old system.

{% include img.html src="/assets/posts/2025-winter-development-update/7.png" %}

## What’s next

Some things have finally started working the way they should, and that’s a big milestone for us. At the same time, there’s still a lot left to do before all of this is ready to ship as an update.

We know the update cadence has been slower than many of you expected, but this approach is very much in line with how we’ve always worked on Voxel Tycoon. We prefer a steady, deliberate pace and are willing to revisit and rebuild core systems when needed, so that what we put in place can hold up for years — even if that means progress feels slow from the outside.

At this stage, the new system exists alongside the old one. Most of the remaining work is about technical refinement and carefully migrating existing behavior from the old system to the new one. This includes vehicle behavior on top of the new systems, handling edge cases in complex layouts, and making sure everything behaves predictably under real gameplay conditions. A significant part of the effort also goes into performance optimization — ensuring that the new flexibility does not come at the cost of scalability as your empire grows.

Thank you for your patience, your feedback, and for being with us.

Wishing you a cozy and happy New Year 🎆🎄✨
