import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const client = await db.connect();
  try {
    const req = await request.json();
    const { email, password } = req;

    // Check if user with provided email exists
    const existingUserQuery = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    const existingUser = existingUserQuery.rows[0];

    if (!existingUser) {
      return NextResponse.json({
        status: 400,
        message: "User not found",
      });
    }

    // Compare provided password with stored hashed password
    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
      return NextResponse.json({
        status: 401,
        message: "Invalid credentials",
      });
    }

    // Generate JWT token for the user
    const token = jwt.sign(
      { userId: existingUser.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    return NextResponse.json({
      userData: { token, user: existingUser },
      status: 200,
      message: "Login successful",
    });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred during login" });
  } finally {
    client.release();
  }
}
