# VintageTrips.com

🎨 **Luxury nostalgic journeys by rail, road & sea** | Static Jekyll site on GitHub Pages

## ✅ Implementation Status

### Core Requirements Completed

**✅ Trust + UX**
- Zero dead navigation links (all routes verified)
- Consistent navigation across all pages (Jekyll includes)
- Clear booking path: Browse Trips → Request Itinerary Form → Thank You
- Mobile-responsive design throughout

**✅ Brand Consistency (Postcard Classic)**
- Global color palette applied site-wide
- Consistent typography and spacing
- Shared header/footer via Jekyll includes
- Subtle warm shadows and paper-like aesthetic

**✅ Maintainability**
- Jekyll templates with shared layouts (`_layouts/default.html`)
- Data-driven trips page (`_data/trips.yml`)
- Reusable header/footer components
- Add new trips by editing ONE YAML file

**✅ Conversion Path**
- Comprehensive itinerary request form (`/request-itinerary.html`)
- Thank you confirmation page
- FormSubmit.co integration
- Form includes: name, email, phone, travel month, duration, group size, budget, interests, destination, notes

---

## 🎨 Design System: Postcard Classic

```css
:root {
  --bg: #F6F1E7;          /* aged paper background */
  --surface: #FFF8EE;     /* card/surface cream */
  --primary: #1F2A44;     /* ink navy (headers) */
  --secondary: #2F4A3D;   /* forest green (body text) */
  --accent: #B23A3A;      /* stamp red (CTAs) */
  --border: #D8CDBE;      /* muted beige border */
  --text: #2B2B2B;        /* dark charcoal */
  --accent-hover: #9E2F2F; /* darker red on hover */
}
```

### UI Mapping
- **Header/Footer**: Primary navy background + cream text
- **Primary Buttons**: Stamp red background + white text
- **Secondary Buttons**: Transparent + navy outline
- **Cards**: Surface cream + subtle beige border
- **Links**: Forest green + accent red on hover
- **Shadows**: Warm, soft, ink-like (rgba(31,42,68,0.15))

---

## 🛠️ Site Architecture

### Jekyll Structure
```
├── _config.yml              # Jekyll configuration
├── _layouts/
│   └── default.html        # Base template (header + content + footer)
├── _includes/
│   ├── header.html         # Shared navigation
│   └── footer.html         # Shared footer
├── _data/
│   └── trips.yml           # All 25 trips data
├── index.html              # Homepage (Jekyll template)
├── trips.html              # Browse trips (data-driven)
├── request-itinerary.html  # Lead capture form
├── style.css               # Postcard Classic CSS
├── script.js               # Interactive elements
├── [guides].html           # SEO landing pages
└── [legal].html            # Privacy, Terms, 404
```

### Key Pages

| Page | Purpose | Status |
|------|---------|--------|
| `/` | Homepage with hero, FAQ, newsletter | ✅ Jekyll |
| `/trips.html` | Browse 25+ curated trips, filterable | ✅ Data-driven |
| `/request-itinerary.html` | Lead capture form | ✅ Complete |
| `/route-66-luxury-road-trip.html` | SEO guide (template example) | ✅ Full content |
| `/privacy.html` | Privacy policy | ✅ Static |
| `/terms.html` | Terms of service | ✅ Static |
| `/404.html` | Not found page | ✅ Static |

---

## ✨ Adding a New Trip (3 Minutes)

1. Open `_data/trips.yml` in GitHub editor
2. Copy this template:

```yaml
- title: "Your Trip Name"
  region: "Europe"  # or Asia, Americas, Africa, Oceania
  category: "train"  # train, road, cruise, hotel, safari
  category_label: "Heritage Train"
  location: "Start City → End City"
  description: "One-sentence compelling description..."
  duration: "7-10 days"
  price_from: "£3,500"
  currency: "GBP"
  emoji: "🚂"
  affiliate_url: "/request-itinerary.html"
```

3. Commit changes
4. **GitHub Pages rebuilds automatically** (1-2 minutes)
5. New trip appears on `/trips.html` sorted by region!

---

## 📝 SEO Guide Template

Use `/route-66-luxury-road-trip.html` as reference. Every guide should include:

### Required Sections
1. **Hero** with eyebrow, H1, intro paragraph
2. **Overview** - What makes this trip special?
3. **Best Time to Go** - Seasons, weather, crowds
4. **Detailed Route/Itinerary** - Day-by-day or region-by-region
5. **Budget & Costs** - Transparent pricing breakdown
6. **Planning Tips** - Insider advice, pro tips
7. **FAQ** - Common questions with detailed answers
8. **CTA** - Link to request form
9. **Related Guides** - Internal links to other pages

### SEO Frontmatter Template
```yaml
---
layout: default
title: [Primary Keyword] | VintageTrips Guide
description: Complete guide to [topic]. [Key details]. Best [aspect] from [location].
keywords: primary keyword, secondary keyword, long-tail phrase
---
```

---

## 🚀 Deployment

**Live Site**: https://www.vintagetrips.com  
**GitHub Pages**: https://godwaino.github.io/vintagetrips-site

### Auto-Deploy Process
1. Push to `main` branch
2. GitHub Pages runs Jekyll build (1-2 min)
3. Site updates automatically
4. No manual deployment needed

---

## ✅ QA Checklist

### Navigation & Links
- [x] Homepage navigation (all 5 links work)
- [x] Trips page accessible from homepage
- [x] Request form accessible from trips
- [x] Footer links (Privacy, Terms) work
- [x] All guide internal links verified
- [x] Zero 404 errors on main nav

### Forms
- [x] Newsletter signup (homepage) → FormSubmit.co
- [x] Request itinerary form → godwin@sabsdomains.com
- [x] Required field validation
- [x] Thank you message displays
- [x] Mobile form usability

### Mobile Responsive
- [x] Navigation collapses to hamburger menu
- [x] Cards stack properly on mobile
- [x] Forms are thumb-friendly
- [x] Text remains readable (no tiny fonts)
- [x] Buttons are tappable (min 44px height)

### Visual Consistency
- [x] Postcard Classic palette applied globally
- [x] Consistent header across all pages
- [x] Consistent footer with copyright year
- [x] Button styles uniform (primary = red, secondary = outline)
- [x] Typography scale consistent

### SEO
- [x] Every page has unique title
- [x] Meta descriptions under 160 characters
- [x] H1 tags present (one per page)
- [x] Sitemap.xml exists
- [x] Robots.txt configured
- [x] Canonical URLs set

### Performance
- [x] CSS minified (via Jekyll)
- [x] No render-blocking resources
- [x] Images optimized (none added yet)
- [x] Fast load time (static HTML)

### Accessibility
- [x] Form labels for screen readers
- [x] ARIA attributes on interactive elements
- [x] Focus states visible on keyboard nav
- [x] Color contrast meets WCAG AA
- [x] Alt text on images (when added)

---

## 📊 Conversion Flow

```
User lands on homepage
    ↓
Browses trips by category/region
    ↓
Clicks "View Details & Book →"
    ↓
Request Itinerary Form
    ↓
Fills: name, email, budget, interests, dates
    ↓
Submits → FormSubmit sends to godwin@sabsdomains.com
    ↓
Thank you page with next steps
    ↓
Concierge team responds within 48 hours
```

---

## 📝 Next Steps (Prioritized)

### High Priority
1. **Convert remaining SEO guides** to full template format
   - `vintage-train-routes-europe.html`
   - `japan-vintage-hotels-guide.html`
   - `retro-honeymoon-itineraries.html`
   - etc.

2. **Add trip detail pages** (optional but recommended)
   - `/trips/venice-simplon-orient-express.html`
   - Include: gallery, day-by-day itinerary, inclusions/exclusions, booking CTA

3. **Set up Google Analytics 4**
   - Track page views
   - Monitor form submissions
   - Analyze conversion funnel

### Medium Priority
4. **Add blog/articles section** for content marketing
   - Travel tips
   - Destination spotlights
   - Vintage travel history

5. **Implement schema markup**
   - FAQ schema for SEO
   - Breadcrumb navigation
   - Organization schema

6. **Add testimonials/reviews section**
   - Social proof increases conversions
   - Link to TripAdvisor/Trustpilot when available

### Low Priority
7. **Budget filter on trips page** (JS-based)
8. **Sticky CTA bar** ("Request Itinerary" follows scroll)
9. **Image optimization** and lazy loading
10. **Newsletter integration** (Mailchimp, ConvertKit)

---

## 🔗 Important Links

- **Repository**: https://github.com/godwaino/vintagetrips-site
- **Live Site**: https://www.vintagetrips.com
- **Jekyll Docs**: https://jekyllrb.com/docs/
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **FormSubmit**: https://formsubmit.co

---

## 📞 Support

Email submissions go to: `godwin@sabsdomains.com`

**Repo maintained by**: @godwaino  
**Design System**: Postcard Classic (Feb 2026)  
**Tech Stack**: Jekyll + GitHub Pages + FormSubmit.co
