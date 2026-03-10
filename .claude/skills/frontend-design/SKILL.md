---
name: frontend-design
description: "Production-grade UI/UX kod kurallari. Triggers: styling, CSS, Tailwind, padding, margin, spacing, responsive, mobile, dark mode, accessibility, animation, hover, focus, color, renk, font, typography, design token, WCAG. Use when writing any frontend code to ensure correct spacing, accessibility, and visual quality."
---

# Frontend Design Rules

Kod yazarken uygulanan tasarim ve UX kurallari.

## 1. Design Token Sistemi

### Tipografi Skalasi
```
--font-size-xs:  0.75rem   /* 12px - caption */
--font-size-sm:  0.875rem  /* 14px - secondary */
--font-size-base: 1rem     /* 16px - body minimum */
--font-size-lg:  1.125rem  /* 18px - lead text */
--font-size-xl:  1.25rem   /* 20px - H4 */
--font-size-2xl: 1.5rem    /* 24px - H3 */
--font-size-3xl: 2rem      /* 32px - H2 */
--font-size-4xl: 2.5rem    /* 40px - H1 */
--font-size-5xl: 3.5rem    /* 56px - Display */
```

Kurallar:
- Body line-height: 1.5-1.6 | Heading line-height: 1.1-1.2
- Satir uzunlugu: 45-75 karakter
- Maksimum 2-3 font ailesi

### Spacing Skalasi (8px grid)
```
--space-1:  0.25rem  /*  4px */
--space-2:  0.5rem   /*  8px */
--space-3:  0.75rem  /* 12px */
--space-4:  1rem     /* 16px */
--space-6:  1.5rem   /* 24px */
--space-8:  2rem     /* 32px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-24: 6rem     /* 96px */
--space-32: 8rem     /* 128px - section arasi */
```

Landing page section arasi: 80-120px.

### Renk Kurallari
- 60-30-10 orani (60% dominant, 30% secondary, 10% accent)
- Maksimum bir cesur accent renk
- Beyaz uzerine mor gradient KULLANMA (AI klisesi)

### Animasyon
- Buton feedback: 100-150ms
- SADECE `transform` ve `opacity` anime et (GPU hizlandirmali)
- width, height, margin, padding ANIME ETME
- `prefers-reduced-motion` her zaman kontrol et

## 2. Erisilebilirlik (Zorunlu - WCAG 2.1 AA)

### Renk Kontrasti
- Body text: min 4.5:1
- Buyuk text (18pt+): min 3:1
- UI bilesenleri: min 3:1

### Dokunma Hedefleri
- Minimum boyut: 44x44px
- Minimum aralik: 8px

### Interaktif Elemanlar
- TUM interaktif elemanlarda gorunur focus durumu ZORUNLU
- `outline: none` yerine koymadan KULLANMA
- Tab sirasi mantiksal olmali

### Formlar
- Her inputun bir `<label>` eslesmesi ZORUNLU
- Hata mesajlari `aria-describedby` ile baglanmali
- Kullanici denemeden submit butonunu disable ETME

### Semantik HTML
```html
<!-- DOGRU -->
<button type="button">Tikla</button>
<a href="/sayfa">Git</a>

<!-- YANLIS -->
<div onclick="...">Tikla</div>
<span class="link">Git</span>
```

## 3. Tailwind CSS 4 Best Practices

### cn() Helper (Zorunlu)
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Dinamik Class KULLANMA
```typescript
// BOZUK
<div className={`bg-${color}-500`} />

// DOGRU
const colorMap = { blue: "bg-blue-500", red: "bg-red-500" };
<div className={colorMap[color]} />
```

### Responsive (Mobile-First)
```html
<div class="
  flex flex-col          /* Mobil: dikey */
  md:flex-row            /* Tablet+: yatay */
  gap-4 md:gap-8         /* Responsive spacing */
  p-4 md:p-6 lg:p-8     /* Responsive padding */
">
```

Breakpoints: sm:640px | md:768px | lg:1024px | xl:1280px | 2xl:1536px

## 4. Anti-Patternlar (ASLA YAPMA)

### Gorsel
- Beyaz uzerine mor/mavi gradient (AI klisesi)
- Tutarsiz border-radius (birini sec: 4px, 8px veya 12px)
- 3ten fazla font weight

### UX
- Placeholder label olarak kullanma
- Pagination olmadan sonsuz scroll
- Kullanici denemeden submit disable etme

### Teknik
- `outline: none` yerine koymadan
- `<div onclick>` yerine `<button>` kullan
- Dinamik Tailwind classlari (`bg-${color}-500`)
- Layout property animasyonu (width, height, margin)

### Mobil
- 44x44px altinda dokunma hedefi
- 16px altinda body text
- Icerikte yatay scroll
- Basparmak bolgesini engelleyen fixed elemanlar

## 5. Teslim Oncesi Kontrol Listesi

### Erisilebilirlik
- [ ] Renk kontrasti >= 4.5:1
- [ ] Dokunma hedefleri >= 44x44px
- [ ] Tum gorsellerde alt text
- [ ] Tum form alanlarinda label
- [ ] Gorunur focus state

### Teknik
- [ ] Mobile-first responsive
- [ ] Animasyonlar sadece transform/opacity
- [ ] cn() helper kullaniliyor
- [ ] Dark mode destegi
- [ ] prefers-reduced-motion kontrol
