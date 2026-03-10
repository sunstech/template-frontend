---
name: api
description: "Next.js API route handler olusturur (App Router). Triggers: api, endpoint, route handler, REST, GET, POST, PUT, DELETE, CRUD, backend, server action."
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
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("[GET /api/route]:", error);
    return NextResponse.json({ error: "Sunucu hatasi" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/route]:", error);
    return NextResponse.json({ error: "Sunucu hatasi" }, { status: 500 });
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
    return NextResponse.json({ error: "Kayit bulunamadi" }, { status: 404 });
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();
  try {
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(`[PUT /api/route/${id}]:`, error);
    return NextResponse.json({ error: "Sunucu hatasi" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  try {
    return NextResponse.json({ message: "Basariyla silindi" }, { status: 200 });
  } catch (error) {
    console.error(`[DELETE /api/route/${id}]:`, error);
    return NextResponse.json({ error: "Sunucu hatasi" }, { status: 500 });
  }
}
```

### Zorunlu Kurallar
1. **Server-only**: `"use client"` KULLANMA
2. **TypeScript**: Request body, response ve params icin tip tanimla
3. **Next.js 16 params**: `params` artik `Promise` - `await` ile eris
4. **Hata yonetimi**: Her handleri try/catch ile sar
5. **HTTP status kodlari**: Dogru kodlari kullan (200, 201, 400, 404, 500)
6. **Loglama**: Hatalarda `console.error` ile endpoint bilgisini logla
7. **Validasyon**: POST/PUT bodysini islemeden once dogrula

### Query Parameter Okuma
```ts
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
}
```
