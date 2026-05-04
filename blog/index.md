{% for post in site.posts %}
<p>
  <a href="{{ post.url }}">
    {{ post.date | date: "%Y-%m-%d--%H:%M" }} - {{ post.title }}
  </a>
</p>
{% endfor %}