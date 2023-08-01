import { NextRequest } from "next/server";
// import {google} from "googleapis"
// import User from "@/models/user";
// import { connectToDB } from "@/utils/database";

export async function POST(req:any) {
    console.log("post watch web hook api hit");
    try {

        // const body = await req.json();
        console.log('rec data :-');
        console.log(req.body);

        console.log('json:-');
        const data = await req.body.json();
        console.log(data);

        return new Response(JSON.stringify({
            status: true,
            // res: res.data
        }))
        
    } catch (error) {
        console.log("File access error");
        console.log(error);
        return new Response(JSON.stringify({
            status: false,
        }))
    }
}

export async function GET(req: NextRequest) {
    console.log("get watch web hook api hit");
    try {

        // const body = await req.json();
        // console.log('rec data :-');
        // console.log(body);

        return new Response(JSON.stringify({
            status: true,
            // res: res.data
        }))
        
    } catch (error) {
        console.log("File access error");
        console.log(error);
        return new Response(JSON.stringify({
            status: false,
        }))
    }
}