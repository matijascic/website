---
layout: default
title: hmat
---

- [about](/about/)
- [blog](/blog/)
- [github](https://github.com/matijascic)
- [linkedin](https://linkedin.com/in/hugo-matijascic)

my mail: [hugomatijascic@gmail.com](mailto:hugomatijascic@gmail.com)

---

## recent posts

{% for post in site.posts limit:3 %}
- [{{ post.date | date: "%Y-%m-%d" }} - {{ post.title }}]({{ post.url }})
{% endfor %}