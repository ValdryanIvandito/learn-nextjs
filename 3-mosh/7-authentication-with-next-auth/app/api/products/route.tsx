import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "../../../prisma/client";

// Getting all data
export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
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
  // Create data
  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
  // Else, return
  return NextResponse.json(newProduct, { status: 201 });
}
