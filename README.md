# FunDiver website

The source for [fundive.fun](https://fundive.fun/). This is a small static site served through Hugo. The existing GitHub Actions workflow publishes it to GitHub Pages whenever `main` changes.

## Preview locally

```sh
cd static && python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Pages and files

- `static/index.html`: Cloud Music landing page
- `static/cloudmusic/index.html`: app features
- `static/about/index.html`: developer information
- `static/privacypolicy/index.html`: existing privacy policy, carried over from the previous site
- `static/posts/`: redirects for old article URLs
- `static/assets/`: shared styles, small navigation script, and artwork
- `static/CNAME` and `static/app-ads.txt`: existing domain and ads verification

The illustrated player on the home page is a design illustration, not a screenshot of the app. Add a verified store URL and real product screenshots when they are available.
