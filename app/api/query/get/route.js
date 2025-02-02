import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient();

async function handler(req) {
  try {
    const response = await userClient.query.findMany();

    console.log(response);

    return NextResponse.json(
      { msg: "successful req", response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching queries:",error.message);
    return NextResponse.json(
      { msg: "some err occured in get" },
      { status: 500 }
    );
  } finally {
    userClient.$disconnect();
  }
}

export { handler as GET };
