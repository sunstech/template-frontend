# [Proje Adi] - Frontend

[1-2 cumle aciklama]

## Gereksinimler

- Node.js 20+
- npm

## Kurulum

```bash
git clone https://github.com/sunstech/[REPO_ADI].git
cd [REPO_ADI]
npm install
cp .env.example .env.local
npm run dev
```

Tarayicida http://localhost:3000 adresine git.

## Scriptler

| Komut | Aciklama |
|-------|----------|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint kontrolu |

## Tech Stack

- **Framework:** Next.js (App Router)
- **Dil:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint

## Git Workflow

- `main` - Production (sadece PR ile merge)
- `develop` - Development
- `feature/xxx` - Yeni ozellik
- `fix/xxx` - Bug fix

### Commit Formati
```
feat(kapsam): yeni ozellik
fix(kapsam): hata duzeltme
docs(kapsam): dokumantasyon
refactor(kapsam): kod duzenleme
test(kapsam): test ekleme
```

## Ekip

| Rol | Kisi |
|-----|------|
| Frontend Lead | [Ad] |

## Linkler

- Backend repo: [Link]
- Trello: [Board linki]
- Slack: #proje-[ad]
- Figma: [Tasarim linki]