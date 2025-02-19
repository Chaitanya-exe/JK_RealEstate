import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextURL } from "next/dist/server/web/next-url";

const userClient = new PrismaClient();

async function handler(req) {
  try {
    const url = new NextURL(req.url);
    const params = url.searchParams;
    let date = params.get("date");
    console.log(date);

    if (date === "ALL") {
      const queries = await userClient.query.findMany();
      
      if (!queries) {
        throw new Error("Some error occured fetching the querires");
      }

      return NextResponse.json(
        { msg: "successful req", data: queries },
        { status: 200 }
      );
    }

    date = new Date(date);
    date.setHours(0,0,0,0);
    console.log(date)
    const queries = await userClient.query.findMany({
      where: {
        createdAt: {
          gte: date.toISOString()
        }
      },
    });

    if (!queries) {
      throw new Error("Some error occured fetching the querires");
    }

    return NextResponse.json(
      { msg: "successful req", data: queries },
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
