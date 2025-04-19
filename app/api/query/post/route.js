import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient();

async function handler(req) {
  try {
    const body = await req.json();

    const inquiryData =
      typeof body.inquiry === "string" ? [body.inquiry] : body.inquiry;

    const typeData =
      typeof body.type === "string" ? [body.type] : body.type;

    const response = await userClient.query.upsert({
      where: {
        email: body.email,
      },
      update: {
        inquiry: {
          push : inquiryData
        },
        type: 
        {
          push: typeData
        }
      },
      create: {
        name: body.name,
        email: body.email,
        number: body.number,
        inquiry: inquiryData,
        type: typeData,
      },
    });
    return NextResponse.json(
      { msg: "Query sent successfully", response },
      { status: 201 }
    );
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ msg: "some error occured!" }, { status: 500 });
  }

}

export { handler as POST };
