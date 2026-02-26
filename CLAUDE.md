# Suns Tech - Frontend Template

Next.js frontend projesi. Bu dosya Claude Code icin proje kurallarini tanimlar.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Dil:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint 9 (flat config) + Prettier
- **Font:** Geist Sans / Geist Mono (`next/font/google`)

## Kod Kurallari

### Genel
- Tum dosyalar TypeScript (`.ts` / `.tsx`)
- Path alias: `@/` kullan (ornek: `@/components/Button`)
- Prettier ayarlari: cift tirnak, 100 karakter satir, trailing comma
- Commit formati: conventional commits (`feat:`, `fix:`, `docs:`, `refactor:`)

### Next.js App Router
- Server Component varsayilan — sadece gerektiginde `"use client"` ekle
- `"use client"` gereken durumlar: useState, useEffect, onClick, onChange, tarayici API'leri
- Sayfa dosyalari: `app/[route]/page.tsx`
- Layout dosyalari: `app/[route]/layout.tsx`
- API route'lari: `app/api/[route]/route.ts`
- Metadata: her sayfada `export const metadata: Metadata` tanimla
- Loading UI: `loading.tsx`, Error UI: `error.tsx`, Not Found: `not-found.tsx`

### Tailwind CSS 4
- `@import "tailwindcss"` soz dizimi (eski `@tailwind` degil)
- Ozel renkler `@theme inline` blogu icerisinde tanimlanir
- Dark mode: `dark:` prefix ile (sistem tercihine gore)

### Component Yapisi
- Component'ler `components/` klasorunde
- Props icin TypeScript interface tanimla (type degil, interface)
- Default export kullan
- Dosya adi: PascalCase (`Button.tsx`, `UserCard.tsx`)

### Hook Yapisi
- Hook'lar `hooks/` klasorunde
- Dosya adi: camelCase, `use` prefix (`useAuth.ts`, `useDebounce.ts`)
- Named export kullan

## Klasor Yapisi

```
app/                    # Next.js App Router sayfalari
components/             # Paylasilan React component'leri
  ui/                   # Temel UI component'leri (Button, Input, Card...)
hooks/                  # Custom React hook'lari
lib/                    # Yardimci fonksiyonlar, config
types/                  # Paylasilan TypeScript tipleri
public/                 # Statik dosyalar
```

## Kod Uretme Komutlari

Bu projede 6 adet slash komutu tanimli:
- `/component` — React component olustur
- `/page` — Next.js sayfa olustur
- `/hook` — Custom React hook olustur
- `/form` — Form component olustur (validasyonlu)
- `/api` — API route handler olustur
- `/layout` — Next.js layout olustur
