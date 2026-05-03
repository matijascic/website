---
layout: default
title: blog
---

<h1>blog</h1>

{% for post in site.posts %}
<p>
  <a href="{{ post.url }}">
    {{ post.date | date: "%Y-%m-%d" }} - {{ post.title }}
  </a>
</p>
{% endfor %}