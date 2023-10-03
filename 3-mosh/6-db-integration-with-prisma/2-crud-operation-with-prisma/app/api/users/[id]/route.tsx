import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "../../../../prisma/client";

// Getting data by id
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch data from a db
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // if not found, return 404 error
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  // Else return data
  return NextResponse.json(user);
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
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // If doesn't exist, return 404
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  // Update the user
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  // Return the updated user
  return NextResponse.json(updatedUser);
}

// Deleting an Object
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Check, is there an existing data ?
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // If doesn't exist, return 404
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  // Delete the user
  await prisma.user.delete({
    where: { id: user.id },
  });
  // Return 200
  return NextResponse.json({});
}
