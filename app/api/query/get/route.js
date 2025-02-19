import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextURL } from "next/dist/server/web/next-url";

const userClient = new PrismaClient();

async function handler(req) {
  try {
    const url = new NextURL(req.url);
    const params = url.searchParams;
    let date = params.get("date");
    console.log("Date param:", date);

    let startDate;
    let endDate;

    switch (date) {
      case "ALL":
        // Fetch all queries without any date filter
        const allQueries = await userClient.query.findMany();
        return NextResponse.json(
          { msg: "successful req", data: allQueries },
          { status: 200 }
        );

      case "today":
        startDate = new Date();
        startDate.setHours(0, 0, 0, 0);

        endDate = new Date();
        endDate.setHours(23, 59, 59, 999);
        break;

      case "yesterday":
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 1);
        startDate.setHours(0, 0, 0, 0);

        endDate = new Date();
        endDate.setDate(endDate.getDate() - 1);
        endDate.setHours(23, 59, 59, 999);
        break;

      case "last7Days":
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 6); 
        startDate.setHours(0, 0, 0, 0);

        endDate = new Date();
        endDate.setHours(23, 59, 59, 999);
        break;

      case "last30Days":
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 29); 
        startDate.setHours(0, 0, 0, 0);

        endDate = new Date();
        endDate.setHours(23, 59, 59, 999);
        break;

      default:
        return NextResponse.json(
          { msg: "Invalid date filter" },
          { status: 400 }
        );
    }

    const queries = await userClient.query.findMany({
      where: {
        createdAt: {
          gte: startDate.toISOString(),
          lt: endDate.toISOString(),
        },
      },
    });

    return NextResponse.json(
      { msg: "successful req", data: queries },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching queries:", error.message);
    return NextResponse.json(
      { msg: "Some error occurred in get" },
      { status: 500 }
    );
  } finally {
    await userClient.$disconnect();
  }
}

export { handler as GET };
