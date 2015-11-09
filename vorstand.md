---
layout: page
title: Vorstand
permalink: /vorstand/
---
<div class ="col-md-12">
{% for member in site.data.vorstand  %}
  {% assign loopindex = forloop.index | modulo: 2 %}
  {% if loopindex == 1 %}
  <div class="row">
    <div class="col-md-3 vorstand-img-container">
      <img src="/images/vorstand/default.jpg" alt="HTML5 Icon" class="vorstand-img">
    </div>
	<div class="col-md-3 vorstand">
    <p style="text-align: left"><strong>{{member.function}}</strong></p>
    <p>{{member.name}}</p>
    <p>{{member.street}}</p>
    <p>{{member.town}}</p>
    <p>{{member.mobile}}</p>
    <p>{{member.phone}}</p>
    <p>{{member.mail}}</p>
    </div>
  {% else %}
  <div class="col-md-3 vorstand-img-container">
    <img src="/images/vorstand/default.jpg" alt="HTML5 Icon"  class="vorstand-img">
  </div>
    <div class="col-md-3 vorstand">
    <p style="text-align: left"><strong>{{member.function}}</strong></p>
    <p>{{member.name}}</p>
    <p>{{member.street}}</p>
    <p>{{member.town}}</p>
    <p>{{member.mobile}}</p>
    <p>{{member.phone}}</p>
    <p>{{member.mail}}</p>
    </div>
  </div>
  {% endif %}
{% endfor %}
</div>



