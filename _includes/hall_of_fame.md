<style>
.supporters {
    text-align: left;
}
.supporters p {
    padding: 4px 0;
    color: #fff;
    font-weight: bold;
}
.supporters p.tier0 {
    font-weight: normal;
}
.supporters .tag {
    border-radius: 2px;
    font-size: 1rem;
    padding: 2px 4px;
    font-weight: bold;
}
.supporters .tag.tier6 {
    background: linear-gradient(-45deg, #fd9c00 0%, #fd9c00 45%, #fff49c 50%, #fd9c00 55%, #fd9c00 100%);
	background-size: 700% 700%;
    color: #0008;
	animation: gradient 3s linear infinite;
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
@keyframes gradient {
	0% {
		background-position: 100% 50%;
	}
    100% {
        background-position: 0% 50%;
    }
}
</style>

<div class="supporters">

{% assign tier6 = site.data.supporters | where: "tier","6" %}
{% assign tier5 = site.data.supporters | where: "tier","5" %}
{% assign tier4 = site.data.supporters | where: "tier","4" %}
{% assign tier3 = site.data.supporters | where: "tier","3" %}
{% assign tier2 = site.data.supporters | where: "tier","2" %}
{% assign tier1 = site.data.supporters | where: "tier","1" %}
{% assign tier0 = site.data.supporters | where: "tier","0" %}

{% for supporter in tier6 %}
<p>
    {{ supporter.name }} <span class="tag tier6">$200+</span>
</p>
{% endfor %}

{% for supporter in tier5 %}
<p>
    {{ supporter.name }} <span class="tag tier5">$100+</span>
</p>
{% endfor %}

{% for supporter in tier4 %}
<p>
    {{ supporter.name }} <span class="tag tier4">$50+</span>
</p>
{% endfor %}

{% for supporter in tier3 %}
<p>
    {{ supporter.name }} <span class="tag tier3">$25+</span>
</p>
{% endfor %}

{% for supporter in tier2 %}
<p>
    {{ supporter.name }} <span class="tag tier2">$10+</span>
</p>
{% endfor %}

{% for supporter in tier1 %}
<p>
    {{ supporter.name }} <span class="tag tier1">$5+</span>
</p>
{% endfor %}

{% for supporter in tier0 %}
<p class="tier0">
    {{ supporter.name }}
</p>
{% endfor %}

</div>