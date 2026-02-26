---
description: Next.js layout componenti olusturur (App Router). Ornek: /layout dashboard - Sidebar ve header ile dashboard layoutu
argument-hint: layout-yolu - Layout aciklamasi ve icerigi
---

Asagidaki bilgilere gore bir Next.js layout componenti olustur:

$ARGUMENTS

## Kurallar

### Dosya Konumu
- Layout dosyasi: `app/[route-yolu]/layout.tsx`
- Root layout zaten mevcut: `app/layout.tsx` — DEGISTIRME, yeni route-level layout olustur

### Layout Yapisi (Server Component — Varsayilan)
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Bolum Adi",
    default: "Bolum Adi",
  },
  description: "Bolum aciklamasi",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function BolumLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Header, Sidebar, Navigation vb. */}
      <main>{children}</main>
    </div>
  );
}
```

### Client Layout (Interaktif Sidebar/Nav Gerektiginde)
Eger layout interaktif eleman iceriyorsa (toggle sidebar, mobile menu):
- Layout'u Server Component olarak birak
- Interaktif kismi ayri bir Client Component olarak olustur
- Bu componenti layout icine import et

```tsx
// components/DashboardSidebar.tsx — Client Component
"use client";

import { useState } from "react";
import Link from "next/link";

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  // Sidebar mantigi
}
```

```tsx
// app/dashboard/layout.tsx — Server Component
import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

### Zorunlu Kurallar
1. **Server Component varsayilan**: Layout'lar mumkun oldugunca Server Component olmali
2. **Interaktif kisimlar ayri**: Client logic gereken parcalari ayri component olarak olustur
3. **children prop**: Layout MUTLAKA `{children}` render etmeli
4. **Metadata**: `title.template` kullanarak alt sayfalarin basligini duz tut
5. **Tailwind CSS**: Tum stiller Tailwind ile
6. **Responsive**: Mobile'da farkli gorunum (ornek: hamburger menu, gizli sidebar)
7. **Dark mode**: Layout elemanlari dark mode destekli
8. **Semantik HTML**: `<nav>`, `<header>`, `<aside>`, `<main>`, `<footer>` kullan
9. **Root layout'a dokunma**: `app/layout.tsx` degistirme, yeni route altinda layout olustur

### Yaygin Layout Desenleri

**Dashboard Layout (Sidebar + Header):**
```
+------------------+------------------------+
| Sidebar          | Header                 |
| - Nav items      +------------------------+
| - Logo           | Main Content           |
|                  | {children}             |
+------------------+------------------------+
```

**Marketing Layout (Header + Footer):**
```
+----------------------------------------+
| Header (Nav + Logo + CTA)              |
+----------------------------------------+
| Main Content {children}                |
+----------------------------------------+
| Footer (Linkler + Copyright)           |
+----------------------------------------+
```

**Auth Layout (Ortalanmis):**
```
+----------------------------------------+
|         +------------------+           |
|         | Logo             |           |
|         | {children}       |           |
|         | (Login/Register) |           |
|         +------------------+           |
+----------------------------------------+
```

### Navigasyon
- `next/link` kullan (normal `<a>` degil)
- Aktif link icin `usePathname()` hook'u ile kontrol et (client component'te)

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Ana Sayfa" },
  { href: "/dashboard/settings", label: "Ayarlar" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
            pathname === item.href
              ? "bg-zinc-100 font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
              : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
```

Dosyayi olusturduktan sonra kullaniciya bilgi ver:
- Olusturulan dosya yolu/yollari (layout + varsa yardimci component'ler)
- Layout yapisinin aciklamasi
- Alt sayfalarin bu layout'u nasil kullanacagi
