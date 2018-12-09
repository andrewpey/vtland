---
layout: post
style: post
title: Intro to Transport Hubs
category: devlog
---

At the very beginning of the game, the path of a product between its origin (e.g. ore deposit) and a customer is pretty straightforward.

{% include img.html src="/assets/posts/20181125-155056.png" %}

**1.** Extract ore from the deposit using a Mine facility<br>
**2.** Load it onto the train and deliver it to a station near a city where a customer is located<br>
**3.** Sell the goods directly from a station to a customer<br>

However, this works well only for the simplest cases. The farther the station location from a customer the less profit you will get from such a trade. If the target city is big enough, this will become an issue, as train stations are usually big and it's hard or even impossible to place them close enough to a customer.

{% include img.html src="/assets/posts/20181125-160708.png" alt="Delivering copper ore to the house on the top will bring much less profit due huge distance from train station" %}

Fortunately, this can be easily fixed with trucks! Truck stations are much smaller so they can perfectly fit into the required spot.

{% include img.html src="/assets/posts/20181125-161750.png" %}

Now, instead of selling goods directly from the station, we can unload them into trucks first and then deliver directly to customers to obtain maximum profit. And this is where *Transport Hubs* come into play.

The Transport Hub is a group of adjacent buildings (*hub modules*) that can transfer goods between each other without any medium. To form a hub all that is needed is to build a truck station next to an existing train station.

{% include img.html src="/assets/posts/20181125-162016.png" %}

Now all the stuff from trains may be loaded into trucks and delivered almost directly to a customer.

The other case where hubs are essential is when you need to store goods instead of selling or unloading them immediately. Warehouses come to the rescue!

In the example above the train will wait until fully unloaded, and because trucks have much less capacity it will take a huge amount of time. While acceptable, this may be not the behavior you are looking for.

The solution is to add a warehouse to our hub that will serve as a buffer. Now the train will unload directly into the warehouse, instead of into the trucks, decreasing the time taken so it can move off more quickly.

{% include img.html src="/assets/posts/20181125-162331.png" %}

There's one occurrence where you just cannot do without warehouses. It's factories! Selling unprocessed ores is ok, but if you want nearby cities (and your own empire) to grow, you'll need to produce more complex goods.

The basic factory requires two warehouses - one to take source materials from and the other for storing the final product. They should be connected with conveyors, with some processing devices in the middle.

{% include img.html src="/assets/posts/20181125-163723.png" alt="An example of more complex factory that requires 3 warehouses to operate" %}

> Keep in mind that factories solely belong to one hub, so you can't just connect hubs in different cities with conveyors and sidestep all the transport stuff.

Of course, this is not all that hubs are capable of doing, but this post is already too huge. Thanks for reading this far, and see you next time!

Stay tuned for more information about the game! Please [follow our social networks](/contacts), and we encourage you to join our [Discord](http://discord.gg/64KPWd5) and share your thoughts with us and the community.

<div style="text-align: center">
    <img style="width: 80px;" src="/assets/outlined-33-shadow.png"/>
</div>