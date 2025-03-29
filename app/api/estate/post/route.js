import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient();
async function handler(req) {
    try {
        const body = await req.json();
        const response = await userClient.property.create({
            data: {
                address: body.address,
                location: body.location,
                size: body.size,
                owner: body.owner,
                type:body.type.toUpperCase(),
                status: body.status.toUpperCase(),
                images: {
                    create: body.images
                }
            },
            include: {
                images: true
            }
        });

        if (!response) {
            throw new Error("Error while submitting form");
        }

        return NextResponse.json({ data: response, success: true }, { status: 201 });
    } catch (err) {
        console.log(`${err}`);
        return NextResponse.json({ error: "some error occurred", success: false }, { status: 500 });
    } finally {
        userClient.$disconnect();
    }
}

export { handler as POST };