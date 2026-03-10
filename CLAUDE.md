# Suns Tech - Frontend Template

Next.js frontend projesi. Bu dosya Claude Code icin proje kurallarini tanimlar.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Dil:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint 9 (flat config) + Prettier
- **Test:** Vitest + React Testing Library (unit/component), Playwright (E2E)
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

## Test Kurallari

### Unit & Component Testleri (Vitest + React Testing Library)
- Test dosyalari: `__tests__/` klasorunde, `.test.tsx` uzantisi
- Component testlerinde `@testing-library/react` kullan — DOM query'leri icin `screen` kullan
- Kullanici etkilesimi icin `@testing-library/user-event` kullan (`fireEvent` degil)
- Her component icin en az: render, interaction ve edge case testleri yaz
- Mock'lar icin `vi.fn()` ve `vi.mock()` kullan
- `npm test` ile calistir, `npm run test:watch` ile izleme modunda calistir

### E2E Testleri (Playwright)
- Test dosyalari: `e2e/` klasorunde, `.spec.ts` uzantisi
- Locator'lar icin `getByRole`, `getByText` tercih et (CSS selector yerine)
- Her kritik kullanici akisi icin E2E testi yaz (navigasyon, form submit, auth)
- `npm run test:e2e` ile calistir, `npm run test:e2e:ui` ile gorsel modda calistir

### Test Dosya Yapisi
```
__tests__/              # Unit & component testleri
  page.test.tsx         # Sayfa testleri
  components/           # Component testleri
    Button.test.tsx
e2e/                    # E2E testleri
  home.spec.ts
```

## Klasor Yapisi

```
app/                    # Next.js App Router sayfalari
components/             # Paylasilan React component'leri
  ui/                   # Temel UI component'leri (Button, Input, Card...)
hooks/                  # Custom React hook'lari
lib/                    # Yardimci fonksiyonlar, config
types/                  # Paylasilan TypeScript tipleri
public/                 # Statik dosyalar
__tests__/              # Unit & component testleri (Vitest)
e2e/                    # E2E testleri (Playwright)
```

## Kod Uretme Komutlari

Bu projede 6 adet slash komutu tanimli:
- `/component` — React component olustur
- `/page` — Next.js sayfa olustur
- `/hook` — Custom React hook olustur
- `/form` — Form component olustur (validasyonlu)
- `/api` — API route handler olustur
- `/layout` — Next.js layout olustur
