import { PrismaClient } from "@prisma/client";
import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";

const userClient = new PrismaClient();

async function deleteProperty(id){
    await userClient.$transaction([
        userClient.image.deleteMany({
            where:{
                propertyId: id
            }
        }),
        userClient.property.delete({
            where:{
                id: id
            }
        })
    ])
}

async function handler(req){
    try {
        const url = new NextURL(req.url)
        const id = url.pathname.split("/").pop();
        
        const search = await userClient.property.findFirst({
            where:{
                id: id
            },
        });

        if (!search){
            return NextResponse.json({msg:"record does not exist"},{status:404});
        }

        const response = await deleteProperty(id)

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