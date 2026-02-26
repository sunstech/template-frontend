---
description: Yeni bir custom React hook olusturur. Ornek: /hook useDebounce - Debounce islemi icin hook
argument-hint: useHookAdi - Kisa aciklama
---

Asagidaki bilgilere gore bir custom React hook olustur:

$ARGUMENTS

## Kurallar

### Dosya Konumu
- Hook dosyalari: `hooks/useHookAdi.ts`
- Eger hook JSX dondurmuyorsa `.ts`, JSX donduruyorsa `.tsx` uzantisi kullan

### Hook Yapisi
```ts
"use client";

import { useState, useEffect } from "react";

interface UseHookAdiOptions {
  // Hook parametreleri (opsiyonel)
}

interface UseHookAdiReturn {
  // Hook donus degerleri
}

export function useHookAdi(options?: UseHookAdiOptions): UseHookAdiReturn {
  // Hook mantigi

  return {
    // Donus degerleri
  };
}
```

### Zorunlu Kurallar
1. **"use client"**: Hook'lar React hook'lari kullandigi icin her zaman client component gerektirir, dosyanin en ustune `"use client"` ekle
2. **TypeScript**: Parametre ve donus tipleri icin interface tanimla
3. **Named export** kullan (default export degil)
4. **Dosya adi**: camelCase, `use` prefix ile basla (`useAuth.ts`, `useDebounce.ts`)
5. **Hook adi**: `use` prefix ile basla (React kurali)
6. **Temizlik**: `useEffect` icinde cleanup fonksiyonu tanimla (gerektiginde)
7. **Hata yonetimi**: try/catch ile hata durumlarini yakala, hata state'i dondur
8. **Performans**: Gereksiz re-render'i onlemek icin `useCallback`, `useMemo` kullan

### Hook Kategorileri ve Ornekler

**State Yonetimi:**
- `useLocalStorage` — localStorage senkronizasyonu
- `useToggle` — boolean state toggle

**Side Effects:**
- `useDebounce` — Deger debounce
- `useMediaQuery` — Responsive breakpoint algilama
- `useClickOutside` — Dis tiklama algilama

**Data Fetching:**
- `useAsync` — Asenkron islem yonetimi (loading, error, data)

### Ornek: useDebounce
```ts
"use client";

import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

Dosyayi olusturduktan sonra kullaniciya bilgi ver:
- Dosya yolu
- Kullanim ornegi (import + component icinde kullanim)
- Donus degerleri ve tipleri
