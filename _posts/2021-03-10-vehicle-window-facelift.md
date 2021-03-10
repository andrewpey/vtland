---
layout: post
style: post
title: 'Coming in 0.85: A new way to set up a schedule'
category: devlog
thumb: /assets/posts/vehicle-window-facelift/1.png
thumb_square: /assets/posts/vehicle-window-facelift/thumb.png
excerpt: With 0.85, the Vehicle Window will receive a huge facelift
---

With 0.85, the Vehicle Window receives a huge facelift.

{% include img.html src="/assets/posts/vehicle-window-facelift/1.png" %}

Some changes are already obvious, but let's switch to Edit mode and see what it reveals.

## Stops and orders

From 0.85, you can set multiple orders per one stop. It helps to group related orders and manipulate them as one piece.

{% include img.html src="/assets/posts/vehicle-window-facelift/3.png" %}

After a stop has been added to the schedule, you can add as many orders as you want. A vehicle will execute all of them after arriving at this stop.

There are also a few useful presets, allowing you quickly add common orders to the schedule.

{% include video.html src="/assets/posts/vehicle-window-facelift/2.mp4" %}

Additionally, you can now change the order of stops or orders just by dragging them around.

{% include video.html src="/assets/posts/vehicle-window-facelift/5.mp4" %}

There're some other improvements too:

- Hold <kbd>Shift</kbd> to add many stops to the schedule at once
- Added **Wait for N seconds** order
- Option to force a vehicle to turn around at the stop
- When you pick exact cars to apply an order to, you can see what kind of cargo they are moving

## Waypoints

Sometimes the automatic pathfinding doesn't suit your needs, and you might want to direct your vehicles through the exact locations of your network. Previously, this involved building expensive and space-consuming intermediate stations.

Now, there's a new kind of station at your disposal, the only purpose of which is to serve as a waypoint. It's cheap and takes no extra space!

{% include img.html src="/assets/posts/vehicle-window-facelift/7.png" %}

Also, previously, a vehicle arriving at a station always performed a complete stop even it's intended to just pass through it. A lot of precious time and power were wasted as a result.

But no more! When adding a stop to your schedule, just choose a preset called **Waypoint**. This way, a vehicle will pass the destination without any delay. You can also force this behavior manually in the new picker at the interface of the stop.

{% include img.html src="/assets/posts/vehicle-window-facelift/6.png" %}

Both special waypoint stations and regular stations could be set up as waypoints.

## Route management improvements

While we don't have a full-featured route management window yet, we've made some improvements to the current route picker.

{% include img.html src="/assets/posts/vehicle-window-facelift/5.png" %}

The first thing you'll notice is that the color of the route is now more readable, but there's more.

From the new three-dots menu, you can now see a list of all the vehicles attached to the exact route.

Also, removing the last vehicle from a route no longer automatically removes a route, so you can be sure your precisely set orders won't be lost. To remove the routes no longer needed, use the three-dots menu in the route picker.

And the last related improvement allows you to remove a vehicle from a route, but keep its schedule. Cloning routes now will be a bit easier.

## Vehicle Details tab facelift

The Details tab of the Vehicle Window received a facelift too, and now has a more modern look that is in line with the other windows in the game.

{% include img.html src="/assets/posts/vehicle-window-facelift/4.png" %}

## Bonus

{% include img.html src="/assets/posts/vehicle-window-facelift/8.png" alt="Wagon sorting yard by Fredrik Leftin" %}

## That's it for today!

Stay tuned for the next post to discover what to expect from the next major milestone for Voxel Tycoon and the whole community!

<iframe class="widget-steam_modal" src="https://store.steampowered.com/widget/732050/" frameborder="0"></iframe>