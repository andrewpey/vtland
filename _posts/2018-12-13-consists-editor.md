---
layout: post
style: post
title: Consists Editor and Thoughts on Release
category: devlog
draft: true
---

We believe that you can get an overall idea of how deep the transport game is just by looking at how the process of buying transport is implemented. Let's take a look at the implementation that we've prepared for the first release of Voxel Tycoon.

## Welcome the Consists Editor!

{% include img.html src="/assets/consists-editor/pic0.png" %}

This is the window you'll use to buy new vehicles or reconfigure already owned ones. Let's go through some features it provides, besides allowing the player to take a glimpse at some summary information of the vehicle.

### Adding units

When you hit the add button you are presented with a picker with all available units to choose from.

{% include img.html src="/assets/consists-editor/pic1.png" %}

They are split into three categories:

* Unpowered
* <span style="color: #52d900">Powered</span>
* <span style="color: #af5fff">Advanced MU</span>

If the first two speak for themselves, the last one may require some explaination. We'll cover it later in this post.

You can filter by these categories, or also by engine type:

{% include img.html src="/assets/consists-editor/pic2.png" %}

Another feature that probably will be used often is this picker:

{% include img.html src="/assets/consists-editor/pic13.png" %}

You can choose the cargo you wish to transport and it will show you all the units that can handle it. Moreover, it automatically sets the unit purpose when it's added to the consist.

Not all units can be connected to each other because they have different types of couplings. For example, trailers can be connected only to compatible trucks. This is handled for you by Consists Editor as well: it will filter units so only compatible ones are left in the list.

### Editing

This is called Editor for a reason, right? So, you can select some of units and a handy actions panel will pop up:

{% include img.html src="/assets/consists-editor/pic3.png" %}

You can remove, flip, duplicate, or replace selected units, or you can insert a new unit before a selected one.

Also, you can change the purpose for carriages using the little picker above each of them.

And, of course, it allows you to change the vehicle name.

### Advanced MU

Another interesting feature is support for advanced multiple unit systems. While we obviously support basic MUs where more than one powered units provide motive power to the train, there's nothing special about them. So what makes Advanced MUs so... *advanced*?

{% include img.html src="/assets/consists-editor/pic4.png" %}

This third kind of unit stands out because it has a pretty strict structure, which is what makes it special. It consists of many sections, with each of these sections possibly containing both powered and unpowered units. Most importantly, some of the sections may have a variable amount of carriages in it. And for such type of vehicles, special controls will appear in the UI.

{% include img.html src="/assets/consists-editor/pic5.png" %}

> We are not sure if *Advanced MU* is the best term for such kind of units. If you have an idea of what the naming should be, feel free to let us know on [Discord](http://discord.gg/64KPWd5).

### Conclusion

Of course, all of the behaviors described above are controlled by vehicle authors, so modders can configure their units in a way they see fit best. For example, they may prohibit using *Advanced MU* carriages outside of such advanced consists, or may not, so the player can build up the fully custom train by itself. Or, custom couplings may be created by the mod author for even more control and flexibility.

Hope you'll like this way of handling vehicle consists. At least, it's a far cry from the old one:

{% include img.html src="/assets/consists-editor/pic7.png" %}

## Thoughts on release

You may suspect that the release is not going to happen this year. Although, to give you a clue how close it is, we want to announce that the preparation for the first wave of closed pre-alpha roll-out has started. It's a very exciting time as the game finally gets to be played by more than a few people.

If you are interested in participating in the next beta testing waves please fill [this form](). Be advised: playing the pre-alpha version of the Early Access game means a very unfinished experience that most likely will ruin the first impression of the game. So, you should apply only if you really want to spoil all the things and get deep into testing.

Bearing in mind approaching release and all the work that should be done before that, we have no free time to prepare you any holiday presents this Christmas. However, we bet the best gift possible is VT coming into Early Access, albeit a bit late. So, let us wish you Merry Christmas and Happy New Year in advance, while we keep working on getting the game to you.

Stay tuned for more information about the game! Please [follow our social networks](/contacts), and we encourage you to join our [Discord](http://discord.gg/64KPWd5) and share your thoughts with us and the community.

## Bonus content: The making of

{% include img.html src="/assets/consists-editor/pic10.png" %}

{% include img.html src="/assets/consists-editor/pic8.png" %}

{% include img.html src="/assets/consists-editor/pic12.png" %}

{% include img.html src="/assets/consists-editor/pic6.png" %}

<div style="text-align: center">
    <img style="width: 80px;" src="/assets/outlined-33-shadow.png"/>
</div>