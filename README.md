# Embers — Modern Fire & Table

A premium, fully responsive restaurant website built with React, Vite, React Router, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## What's inside

- 17 routed pages: Home, About, Menu, Dishes, Categories, Chefs, Reservation, Gallery,
  Testimonials, Offers, Blog, Contact, FAQ, Cart, Checkout, Order Success, 404
- 52 dishes with search, category/price/diet filters, favorites, and cart
- Cart + Favorites persisted to localStorage via Context API
- Framer Motion page transitions, scroll reveals, hero animations, and an animated stats counter
- Route-based code splitting (`React.lazy`) for fast initial loads
- Accessible semantics: skip link, aria labels on icon buttons, focus-visible states

## Notes for production

- Images are neutral placeholders from picsum.photos, seeded per dish/photo so they stay
  consistent across reloads. Swap these for real food photography before shipping.
- The checkout payment form is UI-only — no real payment processor is wired up.
- The Google Map on the Contact page uses a generic embed; replace the query in
  `src/pages/Contact/Contact.jsx` with your real address.
- Update the newsletter/contact form handlers to call your real backend or a service
  like Formspree/Resend when you're ready to go live.
