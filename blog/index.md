
{% for post in site.posts %}
<p>
  <a href="{{ post.url }}">
    {{ post.date | date: "%Y-%m-%d" }} - {{ post.title }}
  </a>
  {% for tag in post.tags %}<small>#{{ tag }}</small> {% endfor %}
</p>
{% endfor %}