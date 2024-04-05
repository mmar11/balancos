import { error } from "console";
import * as fs from "../../models/fs_module/reader";

export async function GET(request: Request) {
  if (request.method === "GET") {
    try {
      const data: any = await fs.reader();
      return Response.json(JSON.parse(data));
    } catch (error) {
      return Response.json({ error: "Internal Server Error" });
    }
  } else {
    return Response.json({ error: "Method Not Allowed" });
  }
}

export async function POST(request: Request) {
  if (request.method === "POST") {
    // await fs.writer(JSON.stringify(data));

    const data = await request.json();
    return Response.json(data);
  } else {
    // Handle other HTTP methods
  }
}
