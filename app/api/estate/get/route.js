import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextURL } from "next/dist/server/web/next-url";

async function handler(req){
    const userClient = new PrismaClient();
    try {
        const url = new NextURL(req.url);
        const params = url.searchParams;

        const response = await userClient.property.findMany({include:{images:true}});

        if(!response){
            throw new Error("error while fetching the properties")
        }

        return NextResponse.json({success:true, data:response});
    } catch (err) {
        console.log(`${err}`);
        return NextResponse.json({error: "some error occured", success:false},{status:500});
    }finally{
        userClient.$disconnect();
    }
}

export {handler as GET};