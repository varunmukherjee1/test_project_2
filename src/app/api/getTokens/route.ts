import { NextRequest } from "next/server";
import path from "path";
import { promises as fs } from 'fs';


export async function GET(req: NextRequest) {
    console.log("notion auth api hit");

    try {

        // const code = req.nextUrl.searchParams.get("code")
        // const error = req.nextUrl.searchParams.get("error")
        
        // if(error){
        //     return Response.redirect("http://localhost:3000/")
        // }
        
        // console.log("code:-");
        // console.log(code);

        // if(code){
        const jsonDir = path.join(process.cwd(), 'json');
        
        // console.log("code saved");

        const res = await fetch('https://slack.com/api/oauth.v2.access',{
            method:"POST",
            // @ts-ignore
            body: new URLSearchParams({
                refresh_token:'xoxe-1-My0xLTU1NjIyMTI0ODYxNzctNTU1NTY5NjY4NDQzNi01NTM4NzExNzYyODIzLWU1NmFkZWRiMzgxYTljYjNhMWZmNDJjYjViZDg3MTAzN2VjMzYxODhlYjYxODk3YzM0MjRmZjk4MjA3N2Y0MWM',
                client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
                client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            }),
        })
        
        // console.log(res);
        const resData = await res.json();
        console.log("res");
        console.log(resData);
        
        const ops = await fs.writeFile(jsonDir + "/notionToken.json",JSON.stringify({
            ...resData
        }))
        // }

        return Response.redirect("http://localhost:3000/")
        
    } catch (error) {
        console.log("File download error");
        console.log(error);
        return new Response(JSON.stringify({
            status: "Not okey"
        }))
    }
}