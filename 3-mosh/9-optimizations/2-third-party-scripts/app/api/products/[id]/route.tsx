import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "../../../../prisma/client";

// Getting data by id
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch data from a db
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  // if not found, return 404 error
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  // Else return data
  return NextResponse.json(product);
}

// Updating data by id
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  // Validate the request body
  const validation = schema.safeParse(body);
  // If invalid, return 400
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // Check, is there an existing data ?
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  // If doesn't exist, return 404
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  // Update the product
  const updatedProduct = await prisma.product.update({
    where: { id: product.id },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  // Return the updated product
  return NextResponse.json(updatedProduct);
}

// Deleting an Object
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Check, is there an existing data ?
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  // If doesn't exist, return 404
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  // Delete the product
  await prisma.product.delete({
    where: { id: product.id },
  });
  // Return 200
  return NextResponse.json({});
}
