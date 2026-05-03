# Landing page template

A minimal small-business landing page with hero, services, and contact sections. Main content is in `app/page.tsx`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 (or click the auto-forwarded port in Codespaces).

## What to ask Claude

Examples that work well:

- *"Change the business name to 'Hartmann Coffee Roasters'"*
- *"Update the three services to: tax filing, bookkeeping, payroll"*
- *"Add a testimonials section with two quotes"*
- *"Make the hero section dark with white text"*
- *"Add a 'Book a call' button that links to my Calendly"*

## Deploy to Vercel

```bash
vercel login
vercel --prod
```

Follow the prompts — accept the defaults. You'll get a URL like `your-business.vercel.app`.
