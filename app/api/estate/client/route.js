import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

async function handler(req){
    const userClient = new PrismaClient();
    try {
        const result = await userClient.$transaction(async (tx)=>{
            const residential = await tx.property.findMany({
                where:{
                    type:'RESIDENCE'
                },
                select:{
                    id:true,
                    images:true,
                    size:true,
                    location:true,
                    type:true,
                    status:true
                },
            });

            const commercial = await tx.property.findMany({
                where:{
                    type:'COMMERCIAL'
                },
                select:{
                    id:true,
                    images:true,
                    size:true,
                    location:true,
                    type:true,
                    status:true
                }
            });

            return {commercial, residential};
        })
        return NextResponse.json({success:true, result},{status:200});
    } catch (error) {
        console.log(`${error}`);
        return NextResponse.json({error: "some error occured"},{status:500});
    } finally{
        userClient.$disconnect();
    }
}

export {handler as GET}