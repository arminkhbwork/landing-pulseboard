# Landing 01 — PulseBoard

SEO-first startup landing page built with **Next.js 16.1.2**, **TypeScript**, and **Tailwind CSS**.

## Local development (Node)

```bash
npm i
npm run dev
```

## Local development (Docker)

```bash
docker compose up --build
```

Then open `http://localhost:3000` (or whatever `PORT` you set).

If port 3000 is already used (e.g. Dokploy), run:

```bash
HOST_PORT=3001 docker compose up --build
```

## Environment variables

Copy `.env.template` into `.env.local` and fill values as needed.

- `NEXT_PUBLIC_ALLOW_INDEXING`
  - `1`: allow indexing
  - `0`: disallow indexing via `robots.txt` (and set “noindex” behavior for metadata strategy)

## Project Details page

The top navigation’s last item is **Project Details**: `/project`.
