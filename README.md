# TezBooking

TezBooking's responsive launch page for a lightweight online mini-shop and
instant booking form for small businesses. Built with React and Vite, with a
CSS 3D storefront preview.

The storefront and booking form shown on the launch page are a visual preview;
this frontend does not yet save or process real customer bookings.

## Development

```sh
npm install
npm run dev
```

## Build and preview production

Create the optimized static website:

```sh
npm run build
```

Vite writes the production files to `dist/`. To test that exact build on your
computer:

```sh
npm run preview
```

Open the local URL printed in the terminal (usually `http://localhost:4173`).
The preview command is for local testing; it does not publish the site.

## Publish the site

This project is a static frontend. Upload the **contents** of `dist/` to your
web host's public site folder (often `public_html/` in cPanel), or connect the
repository to a static host such as Vercel or Netlify. For automated deploys,
use:

- Build command: `npm run build`
- Output/publish directory: `dist`

After deployment, point your domain to the host using the DNS instructions
provided by that host and enable HTTPS there. Rebuild and redeploy `dist/` after
future code changes.
