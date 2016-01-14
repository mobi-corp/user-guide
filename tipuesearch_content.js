---
layout: nil
---

var tipuesearch = {"pages": [
{% for page in site.pages %}
  {% if page.title %}
    {
    "title"    : "{{ page.title }}",
    "loc" : "http://localhost:3000{{ page.permalink }}",
    "tags" : "",
    "text" : {{ page.content | jsonify | strip_html }}
    } 
    {% if forloop.last %}{% else %},{% endif %}
  {% endif %}
{% endfor %}
]};