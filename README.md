# PickleD³ marketing website

Mobile-first landing page for the PickleD³ iOS app.

## Local development

Use Node 22.14 or newer and pnpm. Run `pnpm install --frozen-lockfile` and `pnpm dev`. Open the local address printed in the terminal. Run `pnpm build` for a production build and `pnpm start` to serve it.

## Content and deployment

Edit the hero description, preview captions, and the App Store, community form, and Instagram URLs in `content/site.ts`. Landing sections are in `app/page.tsx`; layout and design tokens are in `app/globals.css`. Product crops in `public/product/` are prepared for publication. Keep private screenshots in `design-references/`, which is excluded from Git and Vercel uploads.

Import `pickled3-ai/website` into Netlify as a Next.js project. Use the repository root as the base directory and `main` as the production branch. The canonical URL, social metadata, robots file, and sitemap use `https://pickled3.com` by default. An explicit `SITE_URL` overrides that origin at build time. Verify the Netlify deployment before pointing the custom domain at it. The site uses no database, authentication, analytics, or Supabase credentials.
