You are building production-grade industry-specific pages for Ascender Technologies — a West African OEM-level EPC and industrial engineering company. The design quality must be on par with KUKA, Sandvik, and ABB.

✅ Overview
The project is built using Vite, with Tailwind CSS, GSAP, and AOS installed via npm

Icons and fonts may be loaded via CDN

The src/keys/key.js contains Firebase config for Google OAuth login

The navbar.html and footer.html are already implemented and must be used across all pages

You are improving the current mining.html (body content only) and then cloning this improved layout for:

energy.html

infrastructure.html

marine.html

telecom.html

agriculture.html

📂 Project Context
Read cursor.md (new content) and compare it with mining.html generated body

Also check the legacy/ folder inside the project root — some old content/layout may be improved and reused

All files are structured to match OEM best practices — clean layout, consistent typography, enterprise aesthetic

🧩 What to Do
🔁 1. Read and Compare
Parse both cursor.md and the previously generated mining.html

Combine the best layout decisions, AOS/GSAP animations, Tailwind structure, spacing, etc.

Use cursor.md for updated section content

Use legacy/ as a source of design inspiration (card layouts, workflows, grid patterns)

🛠️ 2. Enhance the mining.html Body
Refactor the current <body> section using:

Better structure

Optimized animations

Higher fidelity typography, spacing (py-20, gap-16, text-lg, etc.)

New content from cursor.md

Real industrial Unsplash images

Use modular Tailwind utility best practices (not inline CSS)

📄 3. Clone for All Other Pages
Create high-quality versions of the following industry pages using the same improved layout from mining.html, but:

Vary the hero section title/image/description

Update the "What We Do" and "Products/Services" sections per industry

Use relevant Unsplash images

Change color accents if needed (energy = vibrant blue, marine = navy tones, etc.)

Ensure all content is OEM-level and not placeholder or generic

Pages:

energy.html

infrastructure.html

marine.html

telecom.html

agriculture.html (Black Soldier Fly farming gets its own section)

🔧 4. Routing, Build, and SEO
Update the following configs to ensure correct clean URLs and bundling:

🧾 vercel.json:
json
Copy
Edit
{
  "cleanUrls": true,
  "rewrites": [
    { "source": "/mining", "destination": "/mining.html" },
    { "source": "/energy", "destination": "/energy.html" },
    { "source": "/infrastructure", "destination": "/infrastructure.html" },
    { "source": "/marine", "destination": "/marine.html" },
    { "source": "/telecom", "destination": "/telecom.html" },
    { "source": "/agriculture", "destination": "/agriculture.html" }
  ]
}
⚙️ vite.config.js (ensure correct base and asset handling):
js
Copy
Edit
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
🔁 5. Shared Navbar & Footer
Inject the shared navbar.html and footer.html into all industry pages

If using JS includes or templating, ensure Vite resolves them at build time

Navbar includes Google OAuth modal logic from src/keys/key.js (already working)

📲 6. Final Checks
All pages must:

Animate smoothly (AOS/GSAP)

Work seamlessly locally (npm run dev)

Deploy correctly on Vercel with clean URLs

Use responsive layout (flex-col md:flex-row, grid-cols-1 sm:grid-cols-2, etc.)

Have real content for each industry (not copy-pasted)

Be mobile-first and accessible

Start by reading cursor.md, legacy/, and existing mining.html, then proceed to rebuild and expand all industry pages with elite OEM structure and styling.

Dont forget to read content.md for sample content ideas, and i also have cards.md, feel free to read it for ideas for the cards