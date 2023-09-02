import { db } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/node-postgres";
import {
  PgSelect,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { registerSchema } from "./schema";
import { date } from "joi";

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  dob: timestamp("dob").notNull(),
  password: text("password").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export async function POST(request: NextRequest) {
  const client = await db.connect();
  try {
    const req = await request.json();
    const value = registerSchema.validate(req);
    if (value.error) {
      return NextResponse.json({
        status: 400,
        message: value.error.details.map((detail) => detail.message),
      });
    }
    const { name, email, password } = value.value;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const existingUserQuery = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    const existingUser = existingUserQuery.rows[0];
    console.log("existing", existingUser);
    if (existingUser) {
      return NextResponse.json({
        status: 400,
        message: "Email already exists",
      });
    }
    const insertedUsers = await drizzle(client)
      .insert(users)
      .values({ name, email, password: hashedPassword, dob: new Date() })
      .returning();

    const token = jwt.sign(
      { userId: insertedUsers[0].id },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );
    const { password: _, ...rest } = insertedUsers[0];
    return NextResponse.json({
      userData: { token, user: rest },
      status: 200,
      message: "Success",
    });
  } catch (error) {
    return NextResponse.json({ error: "Please add Fields" });
  } finally {
    client.release();
  }
}
