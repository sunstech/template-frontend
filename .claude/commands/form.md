---
description: Validasyonlu form componenti olusturur. Ornek: /form LoginForm - Email ve sifre ile giris formu
argument-hint: FormAdi - Form alanlari ve aciklama
---

Asagidaki bilgilere gore validasyonlu bir form componenti olustur:

$ARGUMENTS

## Kurallar

### Dosya Konumu
- Form component'leri: `components/forms/FormAdi.tsx`

### Form Yapisi
```tsx
"use client";

import { useState, type FormEvent } from "react";

interface FormAdiData {
  // Form alanlari
}

interface FormAdiErrors {
  // Hata alanlari (her alan opsiyonel string)
}

interface FormAdiProps {
  onSubmit: (data: FormAdiData) => void | Promise<void>;
  className?: string;
}

export default function FormAdi({ onSubmit, className = "" }: FormAdiProps) {
  const [formData, setFormData] = useState<FormAdiData>({ /* varsayilan degerler */ });
  const [errors, setErrors] = useState<FormAdiErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(data: FormAdiData): FormAdiErrors {
    const newErrors: FormAdiErrors = {};
    // Validasyon kurallari
    return newErrors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } catch {
      // Hata yonetimi
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      {/* Form alanlari */}
    </form>
  );
}
```

### Zorunlu Kurallar
1. **"use client"**: Form'lar her zaman client component
2. **TypeScript**: Form data ve error tipleri icin interface tanimla
3. **Tailwind CSS**: Tum stiller Tailwind ile
4. **Validasyon**: Client-side validasyon ZORUNLU
5. **Hata gosterimi**: Her alanin altinda hata mesaji goster
6. **Loading durumu**: Submit sirasinda buton disabled + yukleniyor gostergesi
7. **Erisilebilirlik**:
   - `<label>` etiketleri `htmlFor` ile input'a baglanmali
   - Hata durumunda `aria-invalid="true"` ve `aria-describedby` kullan
8. **Responsive**: Mobile'da tam genislik, desktop'ta uygun genislik
9. **Dark mode**: Tum form elemanlari dark mode destekli

### Input Stili Sablonu
```tsx
<div>
  <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
    E-posta
  </label>
  <input
    id="email"
    type="email"
    value={formData.email}
    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
    className={`w-full rounded-lg border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 dark:bg-zinc-900 ${
      errors.email
        ? "border-red-500 focus:ring-red-500/20"
        : "border-zinc-300 dark:border-zinc-700"
    }`}
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? "email-error" : undefined}
  />
  {errors.email && (
    <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>
  )}
</div>
```

### Yaygin Validasyon Kurallari
- **Zorunlu alan**: `if (!value.trim()) errors.field = "Bu alan zorunludur";`
- **E-posta**: `if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Gecerli bir e-posta girin";`
- **Min uzunluk**: `if (value.length < 8) errors.field = "En az 8 karakter olmali";`
- **Sifre eslesmesi**: `if (password !== confirmPassword) errors.confirmPassword = "Sifreler eslesmiyor";`

Dosyayi olusturduktan sonra kullaniciya bilgi ver:
- Dosya yolu
- Form alanlari ve validasyon kurallari listesi
- Kullanim ornegi (import + onSubmit handler)
