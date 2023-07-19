import { db } from "@vercel/postgres";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/sanity/sanity.utils";

const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  productid: text("productid").notNull(),
  price: text("price").notNull(),
  quantity: integer("quantity").notNull(),
  createdat: timestamp("createdat").defaultNow().notNull(),
  updatedat: timestamp("updatedat").defaultNow().notNull(),
});
export { cartTable };
export async function POST(request: NextRequest) {
  const client = await db.connect();
  try {
    const req = await request.json();
    const { productId, quantity, price } = req;
    const existingCartQuery = await client.query(
      "SELECT * FROM cart WHERE productId = $1",
      [productId]
    );
    const existingItem = existingCartQuery.rows[0];
    if (existingItem) {
      const updateItem = await drizzle(client)
        .update(cartTable)
        .set({
          quantity: existingItem?.quantity + 1,
          updatedat: new Date(),
        })
        .where(eq(existingItem.productid, productId))
        .returning()
        .execute();
      return NextResponse.json({
        data: updateItem,
        status: 200,
        message: "Cart Updated",
      });
    }
    const succ = await drizzle(client)
      .insert(cartTable)
      .values({
        productid: productId,
        quantity,
        price,
        createdat: new Date(),
        updatedat: new Date(),
      })
      .returning();
    if (succ) {
      return NextResponse.json({
        data: succ,
        status: 200,
        message: "Success",
      });
    }
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ error: "An error occurred" });
  } finally {
    client.release();
  }
}

export async function GET(request: NextRequest) {
  const client = await db.connect();
  try {
    const products = await getProjects();
    const carts = (await client.query("SELECT * FROM cart")).rows;
    const cartItemsWithProduct = carts.map((cartItem) => {
      const product = products.find(
        (product) => product._id === cartItem.productid
      );
      return {
        ...cartItem,
        product: product || null, // Add the product key to the cart item
      };
    });

    return NextResponse.json({
      data: cartItemsWithProduct,
      status: 200,
      message: "Success",
    });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ error: "An error occurred" });
  } finally {
    client.release();
  }
}
