---
name: hook
description: "Custom React hook olusturur. Triggers: hook, useEffect, useState, custom hook, debounce, localStorage, media query, click outside, async hook."
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
  return {};
}
```

### Zorunlu Kurallar
1. **"use client"**: Hooklar React hooklari kullandigi icin dosyanin en ustune ekle
2. **TypeScript**: Parametre ve donus tipleri icin interface tanimla
3. **Named export** kullan (default export degil)
4. **Dosya adi**: camelCase, `use` prefix ile basla
5. **Hook adi**: `use` prefix ile basla (React kurali)
6. **Temizlik**: `useEffect` icinde cleanup fonksiyonu tanimla (gerektiginde)
7. **Hata yonetimi**: try/catch ile hata durumlarini yakala
8. **Performans**: Gereksiz re-renderi onlemek icin `useCallback`, `useMemo` kullan

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
    return () => { clearTimeout(timer); };
  }, [value, delay]);

  return debouncedValue;
}
```
