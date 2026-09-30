# Pitala payments service

Tiny Express service that creates Razorpay orders and verifies payment
signatures for the storefront checkout.

## Local run

```bash
cd backend
npm install
cp .env.example .env   # fill in keys (see below)
node server.js
```

Health check: `GET http://localhost:4000/health` → `{ "ok": true }`.

## Env vars

| Var | Required | Notes |
| --- | --- | --- |
| `PORT` | no | default `4000` |
| `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` | for live/test payments | Razorpay Dashboard → Settings → API Keys. Start with **Test Mode** keys. |
| `SUPABASE_URL` / `SUPABASE_SERVICE_KEY` | not used yet | reserved for future server-side order writes |

Without Razorpay keys the `/api/razorpay/*` routes return **503** and the
storefront checkout automatically offers COD / UPI Direct / WhatsApp ordering.

## Deploy on Render

1. Render Dashboard → **New +** → **Web Service** → connect the repo.
2. Root directory: `backend`. Build command: `npm install`. Start command: `node server.js`.
3. Environment → add `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` (and `PORT` is set by Render automatically).
4. Deploy. Note the service URL, e.g. `https://pitala-payments.onrender.com`.

## Frontend wiring

In the frontend `.env`:

```
VITE_PAYMENTS_API=https://pitala-payments.onrender.com
```

The checkout calls `POST {VITE_PAYMENTS_API}/api/razorpay/order` and
`POST {VITE_PAYMENTS_API}/api/razorpay/verify`. If the service is down or
unconfigured, checkout falls back to COD / UPI Direct / WhatsApp.
