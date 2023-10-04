import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "../../../prisma/client";

// Getting all data
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// Create data
export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  const validation = schema.safeParse(body);
  // If invalid, return 400
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // Check, is there an existing data ?
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });
  // If doesn't exist, return 404
  if (user) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  // Create data
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  // Else, return
  return NextResponse.json(newUser, { status: 201 });
}
