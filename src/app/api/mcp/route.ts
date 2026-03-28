import { NextResponse } from "next/server";

const SHOP_INFO = {
  name: "麦伸ぬーどる",
  genre: "ラーメン・餃子",
  address: "北海道帯広市西一条南10-4 アポロビル 1F",
  phone: "0155-20-3939",
  hours: {
    weekday: "月〜木 20:00〜03:00",
    weekend: "金・土 20:00〜05:00",
  },
  closed_days: "日曜日、第1・第3月曜日",
  access: "JR帯広駅 徒歩5分",
  seats: "カウンター10席",
  payment: "現金のみ",
  parking: "なし",
  price_range: "~999",
  website: "https://muginobi-noodle.ezoai.jp",
  google_maps: "https://www.google.com/maps/search/麦伸ぬーどる+帯広市西一条南10-4",
};

export async function GET() {
  return NextResponse.json({
    jsonrpc: "2.0",
    result: {
      name: "muginobi-noodle-mcp",
      version: "1.0.0",
      description: "麦伸ぬーどる店舗情報API",
      capabilities: {
        tools: [
          {
            name: "get_shop_info",
            description: "麦伸ぬーどるの店舗情報を取得します",
          },
        ],
      },
      shop_info: SHOP_INFO,
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (body.method === "get_shop_info") {
    return NextResponse.json({
      jsonrpc: "2.0",
      id: body.id,
      result: SHOP_INFO,
    });
  }

  return NextResponse.json(
    { jsonrpc: "2.0", id: body.id, error: { code: -32601, message: "Method not found" } },
    { status: 400 }
  );
}
