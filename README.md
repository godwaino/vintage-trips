diff --git a/README.md b/README.md
index 16c3c7b424b2a3a60953202a4e64effc2efa3ee1..4e18b5a99484f6ebd5a9d734c85755bc18b844aa 100644
--- a/README.md
+++ b/README.md
@@ -1,7 +1,50 @@
-# GitHub Codespaces ♥️ Jupyter Notebooks
+# VintageTrips.com Website
 
-Welcome to your shiny new codespace! We've got everything fired up and running for you to explore Python and Jupyter notebooks.
+A premium static website for `vintagetrips.com` with Netlify-ready deployment, rich visual design, and SEO landing pages.
 
-You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with what you're seeing right now - where you go from here is up to you!
+## Included files
 
-Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.
+- `index.html` — main homepage
+- `styles.css` — colorful visual system and responsive layout
+- `script.js` — mobile menu, FAQ accordion, GA4 bootstrap, and waitlist UX
+- `netlify.toml` — redirects + headers
+- `robots.txt` and `sitemap.xml` — crawl/indexing
+- `privacy.html`, `terms.html`, `404.html` — trust and legal basics
+- `og-image.svg` — social preview image
+- 10 SEO pages (`*.html`) targeting destination/intent keywords
+
+## Run locally
+
+```bash
+python3 -m http.server 8000
+```
+
+Open `http://localhost:8000`.
+
+## Netlify form handling (no backend)
+
+The waitlist form already includes Netlify form attributes:
+- `data-netlify="true"`
+- hidden `form-name`
+- honeypot field
+
+After deploy, submissions appear in **Netlify → Forms**.
+
+## Google Analytics 4
+
+Open `script.js` and replace:
+
+```js
+const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
+```
+
+with your actual GA4 measurement ID.
+
+## Deploy
+
+1. Push this branch to GitHub.
+2. In Netlify: **Add new site → Import from Git**.
+3. Build command: *(empty)*
+4. Publish directory: `.`
+5. Add domains: `vintagetrips.com`, `www.vintagetrips.com`
+6. Update DNS records from Netlify instructions.
