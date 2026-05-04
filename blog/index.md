{% for post in site.posts %}
<p>
  <a href="{{ post.url }}">
    {{ post.date | date: "%Y-%m-%d" }} - {{ post.title }}
  </a>
  {% for tag in post.tags %}<small>#{{ tag }}</small> {% endfor %}
</p>
{% endfor %}

<style>
small {
  background: #e0e7ff;
  color: #3730a3;
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  font-size: 0.75rem;
  margin-right: 0.25rem;
}
</style>