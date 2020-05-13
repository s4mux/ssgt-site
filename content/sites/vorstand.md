---
layout: page
title: Vorstand
permalink: /vorstand/
---
<div class ="col-md-12">
{% for member in site.data.vorstand  %}
  {% assign loopindex = forloop.index | modulo: 2 %}
  {% assign mail = member.mail | split: '@' %}
  {% if loopindex == 1 %}
  <div class="row">
    <div class="col-md-3 vorstand-img-container">
      <img src="{{ site.baseurl }}/images/vorstand/{{member.picture}}" alt="{{member.picture}}" class="vorstand-img">
    </div>
	<div class="col-md-3 vorstand">
    <p style="text-align: left"><strong>{{member.function}}</strong></p>
    <p>{{member.name}}</p>
    <p>{{member.street}}</p>
    <p>{{member.town}}</p>
    <p>{{member.mobile}}</p>
    <p>{{member.phone}}</p>
    <a href="{{mail[0]}}[bei]{{mail[1]}}"
       rel="nofollow"
       onclick="this.href='mailto:' + '{{mail[0]}}' + '@' + '{{mail[1]}}'">E-Mail</a>
    </div>
  {% else %}
  <div class="col-md-3 vorstand-img-container">
    <img src="{{ site.baseurl }}/images/vorstand/{{member.picture}}" alt="{{member.picture}}"  class="vorstand-img">
  </div>
    <div class="col-md-3 vorstand">
    <p style="text-align: left"><strong>{{member.function}}</strong></p>
    <p>{{member.name}}</p>
    <p>{{member.street}}</p>
    <p>{{member.town}}</p>
    <p>{{member.mobile}}</p>
    <p>{{member.phone}}</p>
    <a href="{{mail[0]}}[bei]{{mail[1]}}"
       rel="nofollow"
       onclick="this.href='mailto:' + '{{mail[0]}}' + '@' + '{{mail[1]}}'">E-Mail</a>
    </div>
  </div>
  {% endif %}
{% endfor %}
</div>



