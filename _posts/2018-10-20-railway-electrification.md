---
layout: post
style: post
title: Railway Electrification ⚡
ico: pumpkin
category: devlog
thumb: /assets/weekreport/25.gif
redirect_from:
    - "/railway-electrification"
    - "/2018/10/20/railway-electrification"
---

{% include img.html src="/assets/weekreport/25.gif" %}

Over the past week we have made a lot of progress on electrified rails. Actually, we went from no implementation at all to working poles distribution and wires rendering. You can even choose on what side the poles should be placed!

{% include img.html src="/assets/weekreport/20181020-131339.png" %}

Vehicle physics produce fun effects here. Although electric trains will not consider unelectrified segments while pathfinding, in "Looking for trouble" mode where vehicles just randomly drive around, they can have enough momentum to skip areas with no electrification.

{% include img.html src="/assets/weekreport/20.gif" %}

The next area we are going to focus on regarding this is the need to power electrified rails by connecting them to an electrical grid, which in turn should be connected to a powerful enough energy source.

Stay tuned for more information about the game! Please [follow our social networks](/contacts), and we encourage you to join our [Discord](http://discord.gg/64KPWd5) and share your thoughts with us or the community.