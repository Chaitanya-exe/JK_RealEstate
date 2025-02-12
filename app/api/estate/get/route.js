import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

async function handler(req){
    const userClient = new PrismaClient();
    try {
        const response = await userClient.property.findMany();
        
        console.log(response);
        

        return NextResponse.json({msg:'properties fetched successfully',response},{status: 200})
        
    } catch (err) {
        console.log(`${err}`);
        return NextResponse.json({error: "some error occured", success:false},{status:500});
    }finally{
        userClient.$disconnect();
    }
}

export {handler as GET};