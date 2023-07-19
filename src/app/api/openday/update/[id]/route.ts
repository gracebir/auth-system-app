import prisma from "@/lib/prisma";

type requestBody = {
    startDay: string
    endDay: string
}

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    const { startDay, endDay }: requestBody = await request.json()
    
    const openDay = await prisma.openDay.findUnique({
        where: {
            id: +params.id
        }
    })

    if (openDay) {
        const openDayUpdated = await prisma.openDay.update({
            where: {
                id: openDay.id
            },
            data: {
                startDay,
                endDay
            }
        })
        return new Response(JSON.stringify({ msg: `updated to ${openDayUpdated.startDay} - ${openDayUpdated.endDay}` }))
    } else {
        return new Response(JSON.stringify({ error: "open days does not exists" }))
    }
}