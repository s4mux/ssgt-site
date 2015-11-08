---
layout: page
title: Vorstand
permalink: /vorstand/
---

<div class="row vorstand-row">
{% for member in site.data.vorstand  %}
    <div class="col-md-6 vorstand">
    <p><strong>{{member.function}}</strong></p>
    <p>{{member.name}}</p>
    <p>{{member.street}}</p>
    <p>{{member.town}}</p>
    <p>{{member.mobile}}</p>
    <p>{{member.phone}}</p>
    <p>{{member.mail}}</p>
  </div>
  {% endif %}
{% endfor %}
</div>




