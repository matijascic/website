import os, json, re
from html.parser import HTMLParser

BLOG_DIR = os.path.join(os.path.dirname(__file__), "blog")


class PostParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self._tag = None
        self._class = None
        self.title = None
        self.date = None
        self.desc = None

    def handle_starttag(self, tag, attrs):
        self._tag = tag
        self._class = dict(attrs).get("class", "")

    def handle_data(self, data):
        text = data.strip()
        if not text:
            return
        if self._class == "post-title" and self.title is None:
            self.title = text
        elif self._class == "post-date" and self.date is None:
            self.date = text
        elif self._class == "post-desc" and self.desc is None:
            self.desc = text


posts = []
for f in os.listdir(BLOG_DIR):
    if not f.endswith(".html"):
        continue
    parser = PostParser()
    with open(os.path.join(BLOG_DIR, f), encoding="utf-8") as fh:
        parser.feed(fh.read())
    if parser.title and parser.date:
        posts.append(
            {
                "slug": f.replace(".html", ""),
                "title": parser.title,
                "date": parser.date,
                "desc": parser.desc or "",
            }
        )

posts.sort(key=lambda p: p["date"], reverse=True)

out = os.path.join(BLOG_DIR, "posts.json")
with open(out, "w", encoding="utf-8") as f:
    json.dump(posts, f, indent=4)

print(f"generated {out} with {len(posts)} post(s)")
