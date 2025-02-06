import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

async function handler(req){
    const userClient = new PrismaClient();
    try {
        
    } catch (err) {
        console.log(`${err}`);
        return NextResponse.json({error: "some error occured", success:false},{status:500});
    }finally{
        userClient.$disconnect();
    }
}

export {handler as GET};