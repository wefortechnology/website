This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Lead capture & analytics setup

The site needs two keys, set as environment variables (copy `.env.example` to `.env.local` locally, or add them in your hosting dashboard, e.g. Vercel → Settings → Environment Variables):

| Variable | What it does | Where to get it |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Delivers enquiry-form submissions to your inbox. Without it, forms show an error asking visitors to use WhatsApp/phone. | Free at [web3forms.com](https://web3forms.com) — enter the email that should receive leads. |
| `NEXT_PUBLIC_GA_ID` | Loads Google Analytics 4. Without it, no analytics script is loaded. | GA4 Admin → Data Streams → Web → Measurement ID (`G-…`). |

Contact details (phone, WhatsApp, email, hours) live in one place: `src/lib/site.ts`.

### Events tracked in GA4

All lead actions are sent as GA4 events (Reports → Engagement → Events). Mark `generate_lead`, `whatsapp_click` and `phone_click` as **key events** in GA4 Admin to see them as conversions.

| Event | Fired when | `location` values |
|---|---|---|
| `generate_lead` | Any enquiry form submitted successfully | `source`: `contact-form`, `quick-enquiry` |
| `whatsapp_click` | A WhatsApp link/button is clicked | `floating`, `hero`, `navbar`, `footer`, `contact-page`, `cta-section`, … |
| `phone_click` | A `tel:` link is clicked | same as above |
| `email_click` | A `mailto:` link is clicked | same as above |

To add tracking to a new link, use `<TrackedLink event="…" location="…">` from `src/components/TrackedLink.tsx`.
