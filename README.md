# Impulso website

Source for [withimpulso.com](https://withimpulso.com), the marketing site for Impulso.

## Stack

- React 18 + TypeScript, built with Vite
- shadcn/ui (Radix UI) + Tailwind CSS
- React Router
- Framer Motion

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it
to GitHub Pages (custom domain: withimpulso.com). No manual build/copy steps are needed.
