# Hope for Gaza Website

A demonstration charity website raising awareness and funds for Gaza relief efforts. It showcases a compassionate, responsive platform that connects visitors with humanitarian causes and lets them explore how a donation/participation flow could work.

**This is a demo.** No real payments are processed and no mailing list signups are sent anywhere — every form on the site is a front-end-only simulation.

## Features

- Fully responsive layout, from small phones up to wide desktops, built with fluid CSS (flexbox/grid, `clamp()`, no fixed-pixel breakpoints)
- Accessible navigation: real links (not `onclick` handlers), a keyboard-usable mobile menu, `aria-current` on the active page, and a "skip to content" link
- Multi-step donate and participate flows with inline validation and success states (no blocking `alert()` popups)
- 15 pages: home, about, our work, participate, donate, contact, an updates hub with 3 detail pages, and 2 volunteer challenges with 3 focus-area pages

## Project Structure

```
HopeForGazaWebsite/
├── index.html                       # Home page
├── about_us_page.html
├── our_work_page.html
├── participate_page.html
├── donate_page.html
├── contact_us_page.html
├── updates_page.html
├── update1_page.html .. update3_page.html
├── challenge1_page.html, challenge2_page.html
├── community_development_page.html
├── educational_aid_page.html
├── medical_aid_page.html
├── assets/
│   ├── css/
│   │   └── style.css                # Shared design system (variables, layout, components)
│   └── js/
│       ├── main.js                  # Nav, submenus, newsletter form — used on every page
│       ├── donate.js                # Donate page multi-step flow
│       └── participate.js           # Participate page multi-step flow
└── pictures/                        # Images, logos, icons
```

Every page links the same `assets/css/style.css`, so styling changes only need to happen in one place.

## Running Locally

No build step is required — it's a static site.

```bash
git clone https://github.com/BelalIoT21/HopeForGazaWebsite.git
cd HopeForGazaWebsite
python -m http.server 8000
# then visit http://localhost:8000
```

Or simply open `index.html` directly in a browser.

## Customization

Colors, spacing and breakpoints are defined as CSS custom properties at the top of `assets/css/style.css`:

```css
:root {
  --color-primary: #e63946;
  --color-ink: #22252b;
  --color-cream: #f8f6f0;
  --container: 1180px;
}
```

## License

License not specified. All rights reserved to the repository owner.

## Note

This is a demonstration project built to practice front-end web development for a humanitarian cause. For actual donations, please use official charity organizations and their verified payment processors.
