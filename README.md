# Picture Me — early landing page

An early Next.js landing page for Picture Me, with product presentation, a marketplace section, countdown and contact pages.

The application source for QR-based photo capture is maintained in [PictureMe-YFE/app](https://github.com/PictureMe-YFE/app). This landing page is a separate historical implementation, not the complete mobile or web product.

## Contents

- `app/page.jsx` — main page.
- `app/contact/` — contact page.
- `components/` — presentation, marketplace and countdown components.
- `config.js` and `next-sitemap.config.js` — site and sitemap configuration.

## Development

```sh
npm install
npm run dev
```

`npm run build`, `npm start` and `npm run lint` are available in `package.json`. The build runs the sitemap step as well; review domain settings before deploying a copy. Configure only the external integrations used by the page, and keep credentials outside tracked files.

## Starter attribution

This project was started from the [ShipFast JavaScript starter](https://shipfa.st/), by Marc Louvion. The product-specific application and content are maintained in this repository. See the [upstream documentation](https://shipfa.st/docs) for the starter's setup and conventions.
