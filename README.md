# Dr. Maya Reynolds, PsyD — Santa Monica therapy website

Next.js 15 (App Router) + Tailwind CSS 3.

    npm install
    npm run dev      # http://localhost:3000
    npm run build

- **Theme:** edit the CSS variables at the top of `app/globals.css` (primary / secondary / accent). Tailwind reads them via `tailwind.config.js`.
- **Copy:** all text lives in `lib/content.js`, drawn only from the profile.
- **Booking link:** the profile has no phone/email/scheduler, so CTAs point to `#book`. Set `BOOKING_URL` in `lib/content.js`.
- **Images:** Maya's photo and the office photos come from the profile PDF (`public/images`). Other visuals are original SVG illustrations in `components/Art.jsx`, so they match the palette exactly.
