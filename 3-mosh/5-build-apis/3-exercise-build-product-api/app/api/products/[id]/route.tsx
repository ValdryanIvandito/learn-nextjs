import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

// Getting a Sigle Object
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch data from a db
  // if not found, return 404 error
  // Else return data

  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: "Milk" });
}

// Updating an Object
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate the request body
  const body = await request.json();
  // If invalid, return 400
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // Fetch the Product with the given id
  // If doesn't exist, return 404
  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  // Update the Product
  // Return the updated Product
  return NextResponse.json({ id: 1, name: body.name });
}

// Deleting an Object
export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch Product from db
  // If not found, return 404
  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  // Delete the Product
  // Return 200
  return NextResponse.json({});
}
