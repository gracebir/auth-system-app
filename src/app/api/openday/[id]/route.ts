import prisma from "@/lib/prisma"

export async function GET(request:Request, {params}: {params: {id: number}}){
    const timeService = await prisma.timeService.findMany({
        where: {
            dayId: +params.id
        },
    })

    return new Response(JSON.stringify(timeService), {
        headers: { "Content-Type": "application/json" },
    })
}