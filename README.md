# YU JIXUN website

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
- `static/privacypolicy/index.html`: privacy information aligned with the app's App Store disclosure
- `static/posts/`: redirects for old article URLs
- `static/assets/`: shared styles, small navigation script, and artwork
- `static/CNAME` and `static/app-ads.txt`: existing domain and ads verification

App Store screenshots and the app icon in `static/assets/app/` come from the public listing for Cloud Music Player - Listener (App Store ID 1054011814). Refresh them when the listing artwork changes.

The cloud service marks in `static/assets/clouds/` are stored locally. Sources: [Google Drive product logo](https://developers.google.com/workspace/drive/api/guides/branding), [Dropbox brand logo](https://brand.dropbox.com/logo), and [Microsoft OneDrive icon](https://commons.wikimedia.org/wiki/File:Microsoft_OneDrive_Icon_(2025_-_present).svg).
