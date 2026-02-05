diff --git a/README.md b/README.md
index 16c3c7b424b2a3a60953202a4e64effc2efa3ee1..3bf5cd545ea58a8fc27deb39c64934bbd9132fa8 100644
--- a/README.md
+++ b/README.md
@@ -1,7 +1,96 @@
-# GitHub Codespaces ♥️ Jupyter Notebooks
+# VintageTrips.com Website
 
-Welcome to your shiny new codespace! We've got everything fired up and running for you to explore Python and Jupyter notebooks.
+This repository includes a static marketing website for `vintagetrips.com`.
 
-You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with what you're seeing right now - where you go from here is up to you!
+## What's in this repo
 
-Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.
+- `index.html` — page structure and SEO metadata
+- `styles.css` — responsive styling
+- `script.js` — basic UI interactions
+- `robots.txt` — search engine crawl directives
+- `sitemap.xml` — search engine URL index
+- `netlify.toml` — production deploy config for Netlify
+
+## Run locally
+
+```bash
+python3 -m http.server 8000
+```
+
+Open: `http://localhost:8000`
+
+---
+
+## Zero-confusion go-live guide (recommended: Netlify)
+
+If you can change DNS and are okay paying for hosting, this is the simplest route.
+
+### 1) Put this code in GitHub
+
+If this repo is already on GitHub, skip.
+
+### 2) Create a Netlify site from Git
+
+1. Log in to Netlify.
+2. Click **Add new site** → **Import an existing project**.
+3. Connect GitHub and select this repository.
+4. Build settings:
+   - **Build command:** (leave empty)
+   - **Publish directory:** `.`
+5. Click **Deploy site**.
+
+### 3) Add your custom domain
+
+1. In Netlify site settings: **Domain management** → **Add domain**.
+2. Add:
+   - `vintagetrips.com`
+   - `www.vintagetrips.com`
+3. Set `vintagetrips.com` as primary (recommended).
+
+### 4) Update DNS at your domain registrar
+
+Use the DNS values Netlify gives you in Domain management.
+
+Typical setup:
+
+- `www` → **CNAME** to your Netlify subdomain (example: `your-site.netlify.app`)
+- root (`@`) → Netlify apex target (ALIAS/ANAME/A record based on registrar support)
+
+> If your registrar does not support ALIAS/ANAME at root, use the A records Netlify documents for apex domains.
+
+### 5) Wait for SSL and DNS propagation
+
+- SSL is automatic on Netlify.
+- DNS may take a few minutes up to 24 hours.
+
+### 6) Confirm everything is live
+
+Check these URLs:
+
+- `https://vintagetrips.com`
+- `https://www.vintagetrips.com` (should redirect to primary)
+- `https://vintagetrips.com/robots.txt`
+- `https://vintagetrips.com/sitemap.xml`
+
+---
+
+## Post-launch checklist (traffic foundation)
+
+1. Create Google Search Console property for `vintagetrips.com`.
+2. Submit `https://vintagetrips.com/sitemap.xml`.
+3. Connect analytics (GA4/Plausible/Fathom).
+4. Publish new content pages consistently (destination pages and journal posts).
+5. Add an email provider integration for the newsletter form (ConvertKit/Mailchimp/Brevo).
+
+---
+
+## What I can do next for you
+
+If you want, I can add any of these immediately in the codebase:
+
+- Netlify form handling for newsletter signup (no backend required)
+- privacy policy + terms pages
+- 404 page
+- Open Graph image asset and tags
+- Google Analytics 4 integration
+- first 10 SEO landing pages (destination + intent keywords)
