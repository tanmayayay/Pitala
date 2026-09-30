# Pitala — Fine Brassware (concept build)

Multi-page e-commerce storefront for handcrafted brass idols & brassware.
Theme: **Sacred Minimal** (locked). Dummy brand "Pitala" — rename in
`src/components/Header.jsx`, `src/components/Footer.jsx`, `index.html`.

## Run it

```bash
# frontend
npm install
npm run dev        # → http://localhost:5173

# payments backend (Razorpay order + signature verify)
cd backend && npm install && cp .env.example .env && node server.js  # → :4000
```

## Env (frontend `.env`, all optional — app degrades gracefully)

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_PAYMENTS_API=http://localhost:4000
VITE_RAZORPAY_KEY_ID=
VITE_MERCHANT_UPI=pitala@upi          # ← real UPI id before launch
VITE_WHATSAPP_NUMBER=919876543210     # ← real number before launch
```

## Before launch

1. **Supabase** — see `supabase/README.md`: run `schema.sql`, then `seed.sql`,
   create public `product-images` bucket, upload the 8 webp files from `src/assets`.
2. **Razorpay** — test keys work today; live keys need business KYC (a few days).
   See `docs/PAYMENTS.md`. Until then checkout runs on COD + UPI Direct + WhatsApp.
3. **Catalogue** — the 25 sample products live in `src/data/products.js`.
   Swap in the manufacturer's 50–80 SKUs (same shape) or load from Supabase.

## Deploy

- Frontend: static — GitHub Pages / Vercel / Netlify (`npm run build` → `dist/`).
  HashRouter is used, so static hosts work with no rewrite config.
- Backend: Render web service, root `backend/`, build `npm install`, start `node server.js`.
  Set `VITE_PAYMENTS_API` to its URL.
