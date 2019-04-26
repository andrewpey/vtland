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