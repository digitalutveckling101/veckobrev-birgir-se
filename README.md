# veckobrev.birgir.se

Landningssida för Birgir Birgissons veckobrev om AI, etik och vibe coding.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Vercel Analytics
- MailerLite via serverside API-route
- Hosting: Vercel

## Kom igång lokalt

```bash
npm install
npm run dev
```

Öppna http://localhost:3000.

## Miljövariabler

| Namn                 | Beskrivning                                                    |
|----------------------|----------------------------------------------------------------|
| `MAILERLITE_API_KEY` | Bearer-token för MailerLite Connect API (obligatorisk i prod). |

Kopiera `.env.example` till `.env.local` för lokal utveckling.

## Viktigt

MailerLite group-ID ligger som konstant i `app/api/subscribe/route.ts`. Byt ut `REPLACE_WITH_GROUP_ID` mot rätt ID innan deploy.

## Designsystem

Följer Birgirs gemensamma BRAND.md:
https://github.com/digitalutveckling101/birgir-design-system

## Deploy

Push till `main` i [digitalutveckling101/veckobrev-birgir-se](https://github.com/digitalutveckling101/veckobrev-birgir-se). Vercel bygger automatiskt. Domänen `veckobrev.birgir.se` kopplas under Vercel Settings → Domains.
