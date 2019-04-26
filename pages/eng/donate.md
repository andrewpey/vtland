---
layout: default
style: donate
title: Donate // VOXEL TYCOON
header: Donate
permalink: donate
---
We want to be honest with you as possible, and that's the main reason why we are not accepting pre-orders — we want to make sure you'll pay for an actual game, that you actually enjoy playing, not just for promises.

However, we are aware that some of you would like to support us either way by making donations, so we can't ignore it anymore.

Any person who donates at least <span class="money">$1</span>:

• receives a <span style="color: #ffe200; font-weight: bold">supporter</span> role on [Discord](//discord.gg/64KPWd5)<br>
• will be **featured in the game credits**<br>
• had a chance to **appear in-game** as vehicle driver or even town mayor!

> **Important!** Please add the name you want to see in the credits and other in-game places as a note to payment or [contact us](mailto:dev@voxeltycoon.xyz) after making a donation.

If you are familiar with **Patreon**, here you go:

<a class="patreon" href="https://www.patreon.com/bePatron?u=7655118">
    <img src="/become_a_patron_button.png">
</a>

Alternatively, you can make one-time donation via **PayPal**:

{% include donate_btn.html %}

> There's also version of this page [in Russian](/donate_ru).

<style>
.supporters {
    text-align: left;
}
.supporters p {
    padding: 4px;
}
.supporters .tag {
    border-radius: 2px;
    font-size: 1rem;
    padding: 2px 4px;
    font-weight: bold;
}
.supporters .tag.tier5 {
    background: #ea2e2e;
    color: #0008;
}
.supporters .tag.tier4 {
    background: #cc3bf1;
    color: #0008;
}
.supporters .tag.tier3 {
    background: #00c4ff;
    color: #0008;
}
.supporters .tag.tier2 {
    background: #85f10f;
    color: #0008;
}
.supporters .tag.tier1 {
    background: #ffc800;
    color: #0008;
}
</style>

<div class="supporters">

<h2>Hall of fame💜</h2>

{% assign tier5 = site.data.supporters | where: "tier","5" %}
{% assign tier4 = site.data.supporters | where: "tier","4" %}
{% assign tier3 = site.data.supporters | where: "tier","3" %}
{% assign tier2 = site.data.supporters | where: "tier","2" %}
{% assign tier1 = site.data.supporters | where: "tier","1" %}
{% assign tier0 = site.data.supporters | where: "tier","0" %}

{% for supporter in tier5 %}
<p style="color: #fff; font-weight: bold;">
    {{ supporter.name }} <span class="tag tier5">$100+</span>
</p>
{% endfor %}

{% for supporter in tier4 %}
<p style="color: #fff; font-weight: bold;">
    {{ supporter.name }} <span class="tag tier4">$50+</span>
</p>
{% endfor %}

{% for supporter in tier3 %}
<p style="color: #fff; font-weight: bold;">
    {{ supporter.name }} <span class="tag tier3">$25+</span>
</p>
{% endfor %}

{% for supporter in tier2 %}
<p style="color: #fff; font-weight: bold;">
    {{ supporter.name }} <span class="tag tier2">$10+</span>
</p>
{% endfor %}

{% for supporter in tier1 %}
<p style="color: #fff; font-weight: bold;">
    {{ supporter.name }} <span class="tag tier1">$5+</span>
</p>
{% endfor %}

{% for supporter in tier0 %}
<p style="color: #fff; font-weight: normal;">
    {{ supporter.name }}
</p>
{% endfor %}

</div>