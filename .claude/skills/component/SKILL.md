---
name: component
description: "React component olusturur. Triggers: component, button, card, modal, input, badge, sidebar, navbar, header, footer, UI element, widget, bilesen olustur."
argument-hint: ComponentAdi - Kisa aciklama
---

Asagidaki bilgilere gore bir React component olustur:

$ARGUMENTS

## Kurallar

### Dosya Konumu
- Temel UI componenti ise (Button, Input, Card, Modal, Badge...): `components/ui/ComponentAdi.tsx`
- Ozellige ozel component ise: `components/ComponentAdi.tsx`
- Eger aciklamada farkli bir konum belirtilmisse, onu kullan

### Component Yapisi
```tsx
// Gerekli ise "use client" en uste ekle (useState, useEffect, event handler varsa)

interface ComponentAdiProps {
  // Props tanimla
}

export default function ComponentAdi({ ...props }: ComponentAdiProps) {
  return (
    // JSX
  );
}
```

### Zorunlu Kurallar
1. **TypeScript**: Props icin interface tanimla, `any` kullanma
2. **Tailwind CSS**: Stil icin sadece Tailwind classlari kullan, inline style veya CSS module kullanma
3. **Server Component varsayilan**: `"use client"` sadece interaktivite gerekiyorsa ekle
4. **Default export** kullan
5. **Dosya adi** PascalCase olmali
6. **Responsive**: Mobile-first yaklasim, `sm:`, `md:`, `lg:` breakpointleri kullan
7. **Dark mode**: `dark:` prefix ile karanlik tema destegi ekle
8. **Erisilebilirlik**: Uygun ARIA attributeleri, semantik HTML etiketleri kullan
9. **Import path**: `@/` alias kullan (ornek: `@/components/ui/Button`)

### Props Tasarimi
- Opsiyonel proplar icin `?` kullan
- `className` propu kabul et (kullanicinin stil ekleyebilmesi icin)
- Event handlerlar icin uygun React tipi kullan (`React.MouseEvent`, `React.ChangeEvent` vb.)
- children propu gerekliyse `React.ReactNode` tipinde tanimla

### Ornek Cikti Yapisi
Eger `/component Button - Tiklanabilir buton componenti, variant ve size destegi` yazildiysa:

```tsx
"use client";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/90 focus:ring-foreground",
    secondary:
      "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700",
    outline: "border border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800",
    ghost: "hover:bg-zinc-100 dark:hover:bg-zinc-800",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

Dosyayi olusturduktan sonra kullaniciya bilgi ver:
- Dosya yolu
- Kullanim ornegi (import + JSX)
- Eklenen proplarin listesi
