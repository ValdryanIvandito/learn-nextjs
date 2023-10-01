import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// Getting a Collection of Objects
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "Valdryan" },
  ]);
}

// Creating an Object
export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  // If invalid, return 400
  // Else, return
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
