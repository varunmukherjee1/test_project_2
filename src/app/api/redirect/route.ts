import { NextRequest } from "next/server";
import path from "path";
import { promises as fs } from 'fs';


export async function GET(req: NextRequest) {
    console.log("notion auth api hit");

    try {

        const code = req.nextUrl.searchParams.get("code")
        const error = req.nextUrl.searchParams.get("error")
        
        if(error){
            return Response.redirect("https://test-project-2-wheat.vercel.app/")
        }
        
        console.log("code:-");
        console.log(code);

        if(code){
            const jsonDir = path.join(process.cwd(), 'json');
            
            // console.log("code saved");

            const res = await fetch('https://slack.com/api/oauth.v2.access',{
                method:"POST",
                // @ts-ignore
                body: new URLSearchParams({
                    code: code,
                    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
                    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
                }),
            })
            
            // console.log(res);
            const resData = await res.json();
            console.log("res");
            console.log(resData);
            
        //     const ops = await fs.writeFile(jsonDir + "/notionToken.json",JSON.stringify({
        //         code:code,
        //         ...resData
        //     }))
        }

        return Response.redirect("https://test-project-2-wheat.vercel.app/")
        
    } catch (error) {
        console.log("File download error");
        console.log(error);
        return new Response(JSON.stringify({
            status: "Not okey"
        }))
    }
}

export async function POST(req: Request) {
    console.log("notion auth post api hit");

    try {

        // const code = req.nextUrl.searchParams.get("code")
        // const error = req.nextUrl.searchParams.get("error")
        const body = await req.body;
        
        console.log("body :-");
        console.log(body);
        
        // if(error){
        //     return Response.redirect("http://localhost:3000")
        // }
        
        // console.log("code:-");
        // console.log(code);

        // if(code){
        //     const jsonDir = path.join(process.cwd(), 'json');
        //     const ops = await fs.writeFile(jsonDir + "/notionToken.json",JSON.stringify({code: code}))

        //     console.log("code saved");

        //     const res = await fetch("https://api.notion.com/v1/oauth/token",{
        //         method:"POST",
        //         body: {
        //             //@ts-ignore
        //             code: code,
        //             grant_type: "authorization_code",
        //             redirect_uri: "http://localhost:3000/api/notion/redirect"
    
        //         }
        //     })
            
        //     console.log(res);
        //     const resData = await res.json();
    
        //     console.log("res");
        //     console.log(resData);
        // }

        return Response.redirect("https://test-project-2-wheat.vercel.app/")
        
    } catch (error) {
        console.log("File download error");
        console.log(error);
        return new Response(JSON.stringify({
            status: "Not okey"
        }))
    }
}