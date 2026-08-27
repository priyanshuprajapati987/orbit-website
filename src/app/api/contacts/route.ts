import { NextRequest, NextResponse } from "next/server";
import getDb from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const db = getDb();
    db.prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)").run(name, email, message);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
