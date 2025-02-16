import { PrismaClient } from "@prisma/client";
import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const url = new NextURL(req.url)
        const id = url.pathname.split("/").pop();
        
        const search = await userClient.query.findFirst({
            where:{
                id: id
            }
        });

        if (!search){
            return NextResponse.json({msg:"record does not exist"},{status:404});
        }

        const response = await userClient.query.delete({
            where:{
                id: id
            }
        });

        console.log(response);

        return NextResponse.json({success:true,msg:"deleted successfully"},{status:200});
    } catch (err) {
        console.log(`${err}`);
        return NextResponse.json({err: "some error occured"},{status:500});
    } finally{
        userClient.$disconnect();
    }
}

export {handler as DELETE}