import { NextRequest, NextResponse } from "next/server";

export default async function POST(res: NextRequest) {
  return NextResponse.json({ message: "Hello from the API!" });
}
