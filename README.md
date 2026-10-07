# YU JIXUN website

The source for [fundive.fun](https://fundive.fun/). This is a small static site served through Hugo. The existing GitHub Actions workflow publishes it to GitHub Pages whenever `main` changes.

## Preview locally

```sh
cd static && python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Pages and files

- `static/index.html`: developer app collection and featured app
- `static/cloudmusic/index.html`: Cloud Music features and native screenshot gallery
- `static/about/index.html`: developer information, support email, and expandable FAQs
- `static/privacypolicy/index.html`: stable privacy directory, complete Cloud Music policy, and website privacy
- `static/cloudmusic/privacy/index.html`: direct Cloud Music policy for app-specific links
- `static/posts/`: redirects for old article URLs
- `static/assets/`: shared styles, small navigation script, and artwork
- `static/CNAME` and `static/app-ads.txt`: existing domain and ads verification

The app icon and older artwork in `static/assets/app/` come from the public listing for Cloud Music Player - Listener (App Store ID 1054011814). `static/assets/app/v6-7/` contains compressed WebP previews from the developer’s version 6.7 screenshot set, plus the original CarPlay capture. The current previews are resized native UIKit captures from the verified 2026-10-07 batch. The CarPlay poster combines the authentic CarPlay capture with marketing text. All use an example library and selected themes; they do not promise included music. They do not represent a bundled music catalog. Refresh these assets when the interface changes.

The cloud service marks in `static/assets/clouds/` are stored locally. Sources: [Google Drive product logo](https://developers.google.com/workspace/drive/api/guides/branding), [Dropbox brand logo](https://brand.dropbox.com/logo), and [Microsoft OneDrive icon](https://commons.wikimedia.org/wiki/File:Microsoft_OneDrive_Icon_(2025_-_present).svg).

## Stable URLs and adding an app

Keep `/`, `/cloudmusic/`, `/about/`, `/privacypolicy/` and `/posts/` legacy redirects working. Existing App Store marketing, support, and privacy URLs remain valid. `/privacypolicy/` includes the full Cloud Music disclosure so old app versions do not land on a directory alone. The dedicated policy URL is `/cloudmusic/privacy/`; existing apps do not need to change links.

For a new app, choose a permanent slug, add its detail page and `/<slug>/privacy/`, and list it on the homepage and privacy directory. Base its policy on that app’s verified data practices; do not copy Cloud Music’s SDK claims as a universal policy. Keep existing slugs stable after display names change. Update sitemap.xml and support content. App Store privacy labels must be completed separately for each app. Cloud Music disclosure currently appears both at the legacy policy URL and the dedicated URL; update both together when its data practices change.
