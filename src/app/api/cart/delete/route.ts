import { db } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/node-postgres";
import { NextRequest, NextResponse } from "next/server";
import { cartTable } from "../route";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const client = await db.connect();
  try {
    const req = await request.json();
    if (req.productid == "truncate") {
      await drizzle(client).delete(cartTable).execute();
      return NextResponse.json({
        status: 200,
        message: "Cart Item updated successfully",
      });
    } else {
      const deleteResult = await drizzle(client)
        .delete(cartTable)
        .where(eq(cartTable.productid, req.productid))
        .returning()
        .execute();
      if (deleteResult[0]) {
        return NextResponse.json({
          data: deleteResult,
          status: 200,
          message: "Item deleted successfully",
        });
      } else {
        return NextResponse.json({
          status: 404,
          message: "Item not found in the cart",
        });
      }
    }
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ error: "An error occurred" });
  } finally {
    client.release();
  }
}
