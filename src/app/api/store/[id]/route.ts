import prisma from "@/lib/prisma"

export async function GET(request:Request, {params}: {params: {id: number}}){
    const openDay = await prisma.openDay.findMany({
        where: {
            storeId: +params.id
        },
    })

    return new Response(JSON.stringify(openDay), {
        headers: { "Content-Type": "application/json" },
    })
}