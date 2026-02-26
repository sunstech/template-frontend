---
description: Next.js API route handler olusturur (App Router). Ornek: /api users - Kullanici CRUD endpointleri
argument-hint: route-yolu - Aciklama ve HTTP metodlari
---

Asagidaki bilgilere gore bir Next.js API route handler olustur:

$ARGUMENTS

## Kurallar

### Dosya Konumu
- Route handler: `app/api/[route-yolu]/route.ts`
- Ic ice route: `app/api/[ust]/[alt]/route.ts`
- Dinamik route: `app/api/[route]/[id]/route.ts`

### Route Handler Yapisi
```ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Islem mantigi

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("[GET /api/route]:", error);
    return NextResponse.json(
      { error: "Sunucu hatasi" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validasyon
    // Islem mantigi

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/route]:", error);
    return NextResponse.json(
      { error: "Sunucu hatasi" },
      { status: 500 },
    );
  }
}
```

### Dinamik Route Handler
```ts
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;

  try {
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(`[GET /api/route/${id}]:`, error);
    return NextResponse.json(
      { error: "Kayit bulunamadi" },
      { status: 404 },
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();

  try {
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(`[PUT /api/route/${id}]:`, error);
    return NextResponse.json(
      { error: "Sunucu hatasi" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;

  try {
    return NextResponse.json({ message: "Basariyla silindi" }, { status: 200 });
  } catch (error) {
    console.error(`[DELETE /api/route/${id}]:`, error);
    return NextResponse.json(
      { error: "Sunucu hatasi" },
      { status: 500 },
    );
  }
}
```

### Zorunlu Kurallar
1. **Server-only**: Route handler'lar her zaman server-side calisir, `"use client"` KULLANMA
2. **TypeScript**: Request body, response ve params icin tip tanimla
3. **Next.js 16 params**: `params` artik `Promise` — `await` ile eris
4. **Hata yonetimi**: Her handler'i try/catch ile sar
5. **HTTP status kodlari**: Dogru status kodlarini kullan (200, 201, 400, 404, 500)
6. **Loglama**: Hatalarda `console.error` ile endpoint bilgisini logla
7. **Validasyon**: POST/PUT body'sini islemeden once dogrula

### Query Parameter Okuma
```ts
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
}
```

### Response Tipleri
```ts
// JSON response
return NextResponse.json({ data }, { status: 200 });

// Bos response
return new NextResponse(null, { status: 204 });

// Header ile response
return NextResponse.json(data, {
  headers: { "Cache-Control": "max-age=3600" },
});
```

Dosyayi olusturduktan sonra kullaniciya bilgi ver:
- Olusturulan dosya yolu
- Endpoint URL'leri ve HTTP metodlari
- Request/Response format ornekleri
