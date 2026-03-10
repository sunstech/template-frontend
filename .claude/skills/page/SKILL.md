---
name: page
description: "Next.js sayfasi olusturur (App Router). Triggers: sayfa, page, route, yeni sayfa, sayfa olustur, about, contact, pricing, blog, dinamik sayfa."
argument-hint: sayfa-yolu - Kisa aciklama
---

Asagidaki bilgilere gore bir Next.js sayfasi olustur:

$ARGUMENTS

## Kurallar

### Dosya Konumu
- Route yolu: `app/[sayfa-yolu]/page.tsx`
- Ic ice route: `app/[ust]/[alt]/page.tsx`
- Dinamik route: `app/[parametre]/page.tsx` (koseli parantez ile)

### Sayfa Yapisi (Server Component - Varsayilan)
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa Basligi | Site Adi",
  description: "Sayfa aciklamasi",
};

export default function SayfaAdi() {
  return (
    <main>
      {/* Sayfa icerigi */}
    </main>
  );
}
```

### Dinamik Sayfa Yapisi
```tsx
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} | Site Adi`,
  };
}

export default async function SayfaAdi({ params }: PageProps) {
  const { slug } = await params;
  return (
    <main>
      {/* Sayfa icerigi */}
    </main>
  );
}
```

### Zorunlu Kurallar
1. **Server Component varsayilan**: Sayfalar varsayilan olarak Server Component olmali
2. **Metadata**: Her sayfada `export const metadata` veya `generateMetadata` tanimla
3. **Tailwind CSS**: Stil icin sadece Tailwind classlari kullan
4. **Semantik HTML**: `<main>`, `<section>`, `<article>`, `<h1>` vb. kullan
5. **Next.js 16 params**: `params` ve `searchParams` artik `Promise` - `await` ile erisilmeli
6. **Responsive**: Mobile-first tasarim
7. **Dark mode** destegi ekle

### loading.tsx Sablonu
```tsx
export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-foreground" />
    </div>
  );
}
```

### error.tsx Sablonu
```tsx
"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Bir hata olustu</h2>
      <p className="text-zinc-600 dark:text-zinc-400">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-lg bg-foreground px-4 py-2 text-background transition-colors hover:bg-foreground/90"
      >
        Tekrar dene
      </button>
    </div>
  );
}
```

Dosyayi olusturduktan sonra kullaniciya bilgi ver:
- Olusturulan dosya yolu/yollari
- Sayfanin URLi (ornek: `localhost:3000/about`)
- Metadata bilgisi
