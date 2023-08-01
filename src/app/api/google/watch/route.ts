import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
// import {google} from "googleapis"
// import User from "@/models/user";
// import { connectToDB } from "@/utils/database";

// async function read() {
//     const {done,value} = await reader.read();


//     if (done) {
//         return JSON.parse(chunks.join(''));
//       }
  
//       const chunk = decoder.decode(value, { stream: true });
//       chunks.push(chunk);
//       console.log(chunk);

//       return read(); // read
// }

export async function POST(req: Request) {
    console.log("post watch web hook api hit");
    try {
        console.log('rec data :-');
        const data = req.body;

        //@ts-ignore
        const reader = data.getReader();
        const decoder = new TextDecoder;
        const chunks:any[] = []

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value)
            chunks.push(chunk);
            console.log(chunk);
            // chunks.push(value);
        }
        
        // Concatenate the chunks and parse as JSON
        console.log('chunks arr :-');
        console.log(chunks.join(''));

        console.log('json data');
        const jsonData = JSON.parse(chunks.join(''));
        console.log(jsonData);
        // const jsonData = JSON.parse(Buffer.concat(chunks).toString());
        // console.log(jsonData);

       
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