import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
async function handler(req){
    try {
        const {username, password} = await req.json();
        console.log(`${username}___${password}`)
        if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign({
                username,
                password
            },process.env.JWT_SECRET,{
                expiresIn: '5 days'
            });
            let response = NextResponse.json({ok:true},{status:200});
            response.cookies.set('Authorization',`Bearer ${token}`,{
                httpOnly: true,
                secure: false,
                path: "/manager"
            })
            console.log("Token assigned");
            return response;
        } else {
            let response = NextResponse.json({msg:"invalid credentials"},{status:403});
            return response;
        }

    } catch (e) {
        console.log(`${e}`)
    }
}

export {handler as POST};