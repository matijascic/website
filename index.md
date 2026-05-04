---
layout: default
title: hmat
---

- [about](/about/)
- [blog](/blog/)
- <a href="https://github.com/matijascic" target="_blank" rel="noopener noreferrer">github</a>
- <a href="https://linkedin.com/in/hugo-matijascic" target="_blank" rel="noopener noreferrer">linkedin</a>

my mail: [hugomatijascic@gmail.com](mailto:hugomatijascic@gmail.com)

---

## recent posts

{% for post in site.posts limit:3 %}
- [{{ post.date | date: "%Y-%m-%d" }} - {{ post.title }}]({{ post.url }})
{% endfor %}