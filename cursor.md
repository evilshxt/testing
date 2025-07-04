PROMPT:

You are to generate a single-landing-page frontend design for Ascender Technologies, a professional West African EPC company focused on sustainable solutions in mining, energy, and infrastructure. The page is for demo purposes only and must be very professional, suitable for investors and stakeholders.

Use a layout inspired by KUKA.com, including:

A clean white/light background

Strong use of industrial fonts and minimalist spacing

Navigation bar with fullscreen mega-dropdowns

A top hero section with large image and mission headline

Section-based scroll layout

Strategic animations (fade, slide, parallax etc.)

🔧 TECH STACK
Use CDN versions for:

Tailwind CSS (via CDN)

AOS.js for animations

GSAP (optional, for subtle scroll effects)

Iconify (CDN) for icons

No NPM or build tools. Only HTML, CSS, and JS (vanilla).

Use Unsplash for placeholder imagery — mining machinery, power grids, West Africa, energy solutions, etc.

Include all code in 3 separate files:

index.html

styles.css (linked in head)

main.js (linked at bottom)

🏗️ LAYOUT SECTIONS
Navbar

Logo (Ascender Technologies) in industrial styling

Fullscreen dropdowns for menu items (About, Industries, Solutions, Projects, News, Contact)

Fixed to top

Hero Section

Large impactful headline using company mission

Background image (industrial or mining theme)

CTA Button: “Explore Solutions”

About / Vision / Mission

Text should be taken from the uploaded text file (use real vision/mission content)

Use professional layout and spacing

Industries Served

3-4 cards showing Mining, Energy, Infrastructure

Use icons and hover animations

Solutions / Projects Preview

Cards with short descriptions and image thumbnails

Each links to future detailed page

News Preview (Blog style)

2-3 fake news cards with title, image, and excerpt

Contact + Map Section

Short contact form (name, email, message – non-functional)

Embedded Google Map (centered on Tarkwa, Ghana)

Footer

Company address, quick links, social media icons (WhatsApp, Instagram, X)

🎨 DESIGN NOTES
Use the following color palette:

UCLA Blue #5B8DB8

Cobalt Blue #0047AB

Outer Space #414A4C

Raisin Black #2C2C34

Black #000000

Fonts:

Use modern sans-serif like Inter, Montserrat, or Poppins (via Google Fonts CDN)

Animations:

Use AOS for scroll-based fade-ins

Optional subtle GSAP parallax in the hero

Must be fully responsive (mobile-first)

Ensure all placeholder text is replaced with real content from the uploaded file, e.g., Vision, Mission, Company Bio.

Use semantic HTML and ensure accessibility best practices.

📎 NOTE TO AI:
You will receive a .txt file containing Ascender Technologies' actual Vision, Mission, and introductory copy. Use this file’s contents to fill in the About, Hero, and Footer sections realistically.

If anything is missing in the uploaded file, use placeholders and comment clearly so it can be filled in later.

<!-- Coolors Palette Widget -->
      <script src="https://coolors.co/palette-widget/widget.js"></script>
      <script data-id="019880505898552547">new CoolorsPaletteWidget("019880505898552547", ["3e78b2","004ba8","4a525a","24272b","07070a"]); </script>

all these are just zccent colours, the main bg should be white

https://coolors.co/3e78b2-004ba8-4a525a-24272b-07070a

/* CSS HEX */
--ucla-blue: #3e78b2ff;
--cobalt-blue: #004ba8ff;
--outer-space: #4a525aff;
--raisin-black: #24272bff;
--black: #07070aff;

/* CSS HSL */
--ucla-blue: hsla(210, 48%, 47%, 1);
--cobalt-blue: hsla(213, 100%, 33%, 1);
--outer-space: hsla(210, 10%, 32%, 1);
--raisin-black: hsla(214, 9%, 15%, 1);
--black: hsla(240, 18%, 3%, 1);

/* SCSS HEX */
$ucla-blue: #3e78b2ff;
$cobalt-blue: #004ba8ff;
$outer-space: #4a525aff;
$raisin-black: #24272bff;
$black: #07070aff;

/* SCSS HSL */
$ucla-blue: hsla(210, 48%, 47%, 1);
$cobalt-blue: hsla(213, 100%, 33%, 1);
$outer-space: hsla(210, 10%, 32%, 1);
$raisin-black: hsla(214, 9%, 15%, 1);
$black: hsla(240, 18%, 3%, 1);

/* SCSS RGB */
$ucla-blue: rgba(62, 120, 178, 1);
$cobalt-blue: rgba(0, 75, 168, 1);
$outer-space: rgba(74, 82, 90, 1);
$raisin-black: rgba(36, 39, 43, 1);
$black: rgba(7, 7, 10, 1);

/* SCSS Gradient */
$gradient-top: linear-gradient(0deg, #3e78b2ff, #004ba8ff, #4a525aff, #24272bff, #07070aff);
$gradient-right: linear-gradient(90deg, #3e78b2ff, #004ba8ff, #4a525aff, #24272bff, #07070aff);
$gradient-bottom: linear-gradient(180deg, #3e78b2ff, #004ba8ff, #4a525aff, #24272bff, #07070aff);
$gradient-left: linear-gradient(270deg, #3e78b2ff, #004ba8ff, #4a525aff, #24272bff, #07070aff);
$gradient-top-right: linear-gradient(45deg, #3e78b2ff, #004ba8ff, #4a525aff, #24272bff, #07070aff);
$gradient-bottom-right: linear-gradient(135deg, #3e78b2ff, #004ba8ff, #4a525aff, #24272bff, #07070aff);
$gradient-top-left: linear-gradient(225deg, #3e78b2ff, #004ba8ff, #4a525aff, #24272bff, #07070aff);
$gradient-bottom-left: linear-gradient(315deg, #3e78b2ff, #004ba8ff, #4a525aff, #24272bff, #07070aff);
$gradient-radial: radial-gradient(#3e78b2ff, #004ba8ff, #4a525aff, #24272bff, #07070aff);

---

## Firestore Security Rules (Recommended)

```
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to public collections
    match /equipment/{docId} {
      allow read: if true;
      allow write: if isAdmin();
    }
    match /projects/{docId} {
      allow read: if true;
      allow write: if isAdmin();
    }
    match /news/{docId} {
      allow read: if true;
      allow write: if isAdmin();
    }
    match /solutions/{docId} {
      allow read: if true;
      allow write: if isAdmin();
    }
    // Users can read their own profile, only admins can write
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if isAdmin();
    }
    // Helper function for admin check
    function isAdmin() {
      return request.auth != null &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

- Public can read all content.
- Only admins (role = 'admin' in users collection) can write to any collection.
- Users can read their own user document, but only admins can write to users.

