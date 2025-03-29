import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextURL } from "next/dist/server/web/next-url";

async function handler(req) {
  const userClient = new PrismaClient();

  try {
    const url = new NextURL(req.url);
    const params = url.searchParams;

    let searchValue = params.get("searchValue") || "";
    let sortOrder = params.get("sortOrder") || "asc"; 
    console.log("Search:", searchValue);
    console.log("Sort:", sortOrder);

    let response;

    if (searchValue.trim() === "") {
      response = await userClient.property.findMany({
        include: { images: true }, 
        orderBy: { size: sortOrder === "desc" ? "desc" : "asc" }, 
      });
    } else {
      response = await userClient.property.findMany({
        where: {
          OR: [
            { address: { contains: searchValue, mode: "insensitive" } },
            { location: { contains: searchValue, mode: "insensitive" } },
            { owner: { contains: searchValue, mode: "insensitive" } }, 
          ],
        },
        include: { images: true },
        orderBy: { size: sortOrder === "desc" ? "desc" : "asc" },
      });
    }

    if (!response || response.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No properties found",
        data: [],
      });
    }

    return NextResponse.json({ success: true, data: response });
  } catch (err) {
    console.error(`Error fetching properties:${err}`);
    return NextResponse.json(
      { error: "An error occurred", success: false },
      { status: 500 }
    );
  } finally {
    await userClient.$disconnect();
  }
}

export { handler as GET };
