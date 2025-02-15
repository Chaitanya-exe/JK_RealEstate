import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextURL } from "next/dist/server/web/next-url";

const userClient = new PrismaClient();

async function handler(req) {
  try {
    const url = new NextURL(req.url);
    const params = url.searchParams;

    const queries = await userClient.query.findMany({
      where:{
        createdAt:{
          lte: new Date()
        }
      },
      take:10
    });

    if (!queries){
      throw new Error("Some error occured fetching the querires");
    }

    return NextResponse.json(
      { msg: "successful req", data: queries},
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching queries:", error.message);
    return NextResponse.json(
      { msg: "some err occured in get" },
      { status: 500 }
    );
  } finally {
    userClient.$disconnect();
  }
}

export { handler as GET };
