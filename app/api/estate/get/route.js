import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextURL } from "next/dist/server/web/next-url";

async function handler(req){
    const userClient = new PrismaClient();
    try {
        const url = new NextURL(req.url);
        const params = url.searchParams.forEach((value, key)=>{
            return {key: value}
        });
        console.log(params)
        return NextResponse.json({success:true, data:"request received"});
    } catch (err) {
        console.log(`${err}`);
        return NextResponse.json({error: "some error occured", success:false},{status:500});
    }finally{
        userClient.$disconnect();
    }
}

export {handler as GET};