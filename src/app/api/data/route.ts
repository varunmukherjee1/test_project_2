import { WebClient } from "@slack/web-api";

export async function GET(req: Request){
    console.log("data api hit");
    try {

        const web = new WebClient('xoxe.xoxp-1-Mi0yLTU1NjIyMTI0ODYxNzctNTU0NjY0ODY2NTA2MS01NTU1Njk2Njg0NDM2LTU1NTAzMjM2MDMxMjUtOWJlMTU0OWM2ZmEyZTQ1MWM0Y2I2ZjdmOGQzY2M4ZWUzYzllMDc2YTBkYTFlZmU3YzhlYjdkYjJkMzI4YjNjYQ')

        // const res = await web.conversations.list()
        const res = await web.conversations.history({
            channel: 'C05FYSXH2R4',
        })

        console.log(res);

        return new Response(JSON.stringify({
            status: "okey",
            res:res
        }))
        
    } catch (error) {
        console.log("slack data error");
        console.log(error);

        return new Response(JSON.stringify({
            status: "Not okey"
        }))
    }
}