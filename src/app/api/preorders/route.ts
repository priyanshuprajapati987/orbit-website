import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import getDb from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET || "orbit-secret-key-2026";

function verifyAuth(request: NextRequest): boolean {
  const token = request.cookies.get("orbit_token")?.value;
  if (!token) return false;

  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const db = getDb();
    const preorders = db.prepare("SELECT * FROM preorders ORDER BY created_at DESC").all();

    return NextResponse.json({ preorders });
  } catch (error) {
    console.error("Fetch preorders error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const db = getDb();

    // Check if already exists
    const existing = db.prepare("SELECT id FROM preorders WHERE email = ?").get(email);
    if (existing) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Insert new preorder
    db.prepare("INSERT INTO preorders (email, status) VALUES (?, ?)").run(email, "pending");

    return NextResponse.json(
      { message: "Pre-order placed successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create preorder error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const db = getDb();
    db.prepare("DELETE FROM preorders WHERE email = ?").run(email);

    return NextResponse.json({ message: "Pre-order deleted" });
  } catch (error) {
    console.error("Delete preorder error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
