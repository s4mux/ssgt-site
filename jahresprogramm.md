---
layout: page
title: Jahresprogramm 2016
permalink: /jahresprogramm/
---

<p>Jahresprogramm 2016 plus Schiesszeiten Schützenhaus Giffers-Tentlingen</p>

<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th>Datum</th>
      <th>Schiesszeit</th> 
      <th>Anlass</th>
    </tr>
  </thead>
  <tbody>
{% for event in site.data.jahresprogramm %}
{% if event.color                        %}
{%   if event.color == 'green'           %}
{%     assign color = "success"          %}
{%   elsif event.color == 'blue'         %}
{%     assign color = "info"             %}
{%   elsif event.color == 'red'          %}
{%     assign color = "danger"           %}
{%   else                                %}
{%   elsif event.color == 'yellow'        %}
{%     assign color = "warning"           %}
{%   else                                  %}
{%     assign color = ""                 %}
{%   endif                               %}
{% else                                  %}
{%   assign color = ""                   %}
{% endif                                 %}


    <tr class="{{color}}">
      <td>{{event.date}}</td>
      <td>{{event.time}}</td>
      <td>{{event.description}}</td>
    </tr>
{% endfor %}
  </tbody>
</table>


<table class="table">
  <tbody>
    <td class="success">Obligatorisch</td>
    <td class="info">Gruppenschiessen</td>
    <td class="danger">Feldschiessen</td>
  </tbody>
</table>

Bemerkungen:  	OP muss an den erwähnten Daten geschossen werden.
Waffen:			In der Regel Kleinkaliber: bis 20.30 Uhr, Grosskaliber nur bis 20.00 Uhr ausser OP.
Anerkennungskarten: 	(Feldmeisterschaft OP & FS je 8 Karten, Kantonale 6 Karten) bis am 31. Juli abgeben.
Vom April – September: 	Unsere Jungschützen schiessen jeweils am Mittwochabend (ca. 8 mal pro Jahr) den JS-Kurs. (Nicht mehr Donnerstag).