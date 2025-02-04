import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

async function handler(req){
    try {
        const body = req.json();
    } catch (err) {
        console.log(err);
        return NextResponse.json({error: "some error occured"},{status:500});
    }
}

export {handler as POST};