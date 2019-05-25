---
layout: post
style: post
title: Factories!
category: devlog
---

{% include img.html src="/assets/devlog/factories/conveyor3.gif" %}

*All the stuff described in this post applies for open pre-alpha, that is going to start soon on itch.io. Everything is subject to change and improvement before hitting Steam Early Access.*

Last time, we [covered the game's economy](/devlog/economy). Today we will be looking at another core building block of Voxel Tycoon: Factories!

But before we dive in, we have to cover the raw materials that you'll be processing. Throughout the world you will find patches and deposits of them, usually one in each region; with the exception of the starting region which is guaranteed to have the most basic resources: iron ore, wood, stone, and coal. To extract these resources you'll have to build a mine, a sawmill or other industries that are specific to each raw material.

{% include img.html src="/assets/devlog/factories/image_2019-05-24_18-57-11.png" alt="Coal mining facility (not final assets)" %}

Now we can get to the good stuff: processing! As you probably already know, unlike most transportation tycoons, there are no prebuilt industries that spawn in the world. In VT, you'll build your own, using various components like furnaces for smelting ores, saws for cutting wood, warehouses for storage and conveyor belts for movement and production lines.

This affords incredible flexibility in the flow and shipment of raw materials and products. For instance, small-scale factories could be built onsite in a city or at a mineral deposit, or enormous hubs with huge production could be built, sending and receiving goods to and from all over the map. Both methods do have their advantages and disadvantages, however - the capacities of railcars and road vehicles differ for each material, so for some of them it makes more sense to process them at the destination and for others the opposite is true.

{% include img.html src="/assets/devlog/factories/20190522214942_1.jpg" alt="Small factory near the wood log" %}

Now, you might think that building factories is a big hassle, so why bother? Well, as we already covered last time, processed materials have a *much* higher value, which increases with each Tier - more on that in a moment - and are also used in the research progression system.

{% include img.html src="/assets/devlog/factories/image_2019-05-24_19-11-46.png" alt="Laboratory awaiting for resources to start the research" %}

Voxel Tycoon's research system is tied very closely together with factories and production. Since you'll only have basic materials to and virtually no factory equipment to worry about at first in a new game, you can comfortably get a basic network going in your starting region. In order to make any kind of progress, you have to start doing research. Which costs you not only money but also materials, and as you progress through the technology tree you will need more advanced materials to keep going. These technologies will reward you with new machines and new recipes for them.

{% include img.html src="/assets/devlog/factories/image_2019-05-24_19-08-07.png" alt="A little factory producing middle tier goods" %}

Now, let's take a brief look at how you go about actually building a factory. The most used part will definitely be the conveyor belt, which is pretty self-explanatory. They slowly move a stream of items from one spot to another and can be joined and configured in any way you can imagine. The possibilities are endless!

{% include img.html src="/assets/devlog/factories/conveyor2.gif" alt="Pointless, but why not?" %}

When building machines, you'll see that they have a number of conveyor connections. Each of these can act as either an input or an output, and you can change which is which with the same tool you change any conveyor's orientation with. After that, all you have to do is give the machine the recipe you want it to execute, hook up some conveyers to give it the items it needs, and off it goes!

Most machines have more than two conveyer connections, for example the Furnace which has three. One input should be used for fuel (coal), and the other for ore.

{% include img.html src="/assets/devlog/factories/image_2019-05-24_18-54-02.png" alt="Furnaces" %}

Lastly, let's talk about modding possibilities. You can add custom raw materials, machines, and even recipes - not just for your own machines, but also base game and even other mods'! You can also add other related technologies for production, but we will expand on that another time.

{% include img.html src="/assets/devlog/factories/20190524-193859.png" alt="An example of end-game factory (courtesy of Alego22)" %}

As the first public alpha release draws ever closer, we will continue to talk about Voxel Tycoon's core mechanics in more blog posts, so you can jump straight into the game when it finally ships. Follow us on your favorite social media to keep up to date, or [join our Discord server](http://discord.gg/64KPWd5) to talk with over 2000 other fans!

<small><em>Thanks to <b>Jan Polak</b> and <b>TransCanadaLimited</b> for the huge assistance in the preparation of this post.</em></small>