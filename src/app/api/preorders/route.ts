import { NextResponse } from "next/server";
import { auth } from "@/auth";

// In production, use a database
const preorders: Array<{ email: string; date: string; status: string }> = [];

export async function GET() {
  const session = await auth();
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ preorders });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  // Check if already exists
  const exists = preorders.find((p) => p.email === email);
  if (exists) {
    return NextResponse.json({ message: "Already registered" }, { status: 200 });
  }

  preorders.push({
    email,
    date: new Date().toISOString(),
    status: "pending",
  });

  return NextResponse.json({ message: "Added to waitlist" }, { status: 201 });
}

export async function DELETE(request: Request) {
  const session = await auth();
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { email } = body;

  const index = preorders.findIndex((p) => p.email === email);
  if (index > -1) {
    preorders.splice(index, 1);
  }

  return NextResponse.json({ message: "Removed" }, { status: 200 });
}
