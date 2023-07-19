import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function GET(request:Request, {params}: {params: {id: number}}){
    const usePost = await prisma.store.findMany({
        where: {
            userId: +params.id
        },
    })

    return new Response(JSON.stringify(usePost), {
        headers: { "Content-Type": "application/json" },
    })
}