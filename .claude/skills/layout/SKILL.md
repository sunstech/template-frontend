---
name: layout
description: "Next.js layout componenti olusturur (App Router). Triggers: layout, sidebar, header, dashboard layout, marketing layout, auth layout, navigation, nav, menu."
argument-hint: layout-yolu - Layout aciklamasi ve icerigi
---

Asagidaki bilgilere gore bir Next.js layout componenti olustur:

$ARGUMENTS

## Kurallar

### Dosya Konumu
- Layout dosyasi: `app/[route-yolu]/layout.tsx`
- Root layout zaten mevcut: `app/layout.tsx` - DEGISTIRME, yeni route-level layout olustur

### Layout Yapisi (Server Component - Varsayilan)
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Bolum Adi", default: "Bolum Adi" },
  description: "Bolum aciklamasi",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function BolumLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
  );
}
```

### Zorunlu Kurallar
1. **Server Component varsayilan**: Interaktif kisimlar ayri Client Component olarak olustur
2. **children prop**: Layout MUTLAKA `{children}` render etmeli
3. **Metadata**: `title.template` kullan
4. **Tailwind CSS**: Tum stiller Tailwind ile
5. **Responsive**: Mobileda hamburger menu, gizli sidebar
6. **Dark mode**: Layout elemanlari dark mode destekli
7. **Semantik HTML**: `<nav>`, `<header>`, `<aside>`, `<main>`, `<footer>` kullan
8. **Root layouta dokunma**: `app/layout.tsx` degistirme

### Yaygin Layout Desenleri

**Dashboard (Sidebar + Header):**
```
+------------------+------------------------+
| Sidebar          | Header                 |
| - Nav items      +------------------------+
| - Logo           | Main Content           |
|                  | {children}             |
+------------------+------------------------+
```

**Marketing (Header + Footer):**
```
+----------------------------------------+
| Header (Nav + Logo + CTA)              |
+----------------------------------------+
| Main Content {children}                |
+----------------------------------------+
| Footer (Linkler + Copyright)           |
+----------------------------------------+
```

**Auth (Ortalanmis):**
```
+----------------------------------------+
|         +------------------+           |
|         | Logo             |           |
|         | {children}       |           |
|         +------------------+           |
+----------------------------------------+
```

### Navigasyon
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
