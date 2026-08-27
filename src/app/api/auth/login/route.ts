import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import getDb from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET || "orbit-secret-key-2026";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const db = getDb();
    const user = db.prepare("SELECT id, name, email FROM users WHERE email = ? AND password = ?").get(email, password) as {
      id: number;
      name: string;
      email: string;
    } | undefined;

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });

    // Set cookie
    response.cookies.set("orbit_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
