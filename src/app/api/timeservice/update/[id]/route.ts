import prisma from "@/lib/prisma";

type requestBody = {
    startHour: string
    endHour: string
}

export async function UPDATE(request: Request, { params }: { params: { id: number } }) {
    const { startHour, endHour }: requestBody = await request.json()
    
    const timeService = await prisma.timeService.findUnique({
        where: {
            id: +params.id
        }
    })

    if (timeService) {
        const timeServiceUpdated = await prisma.timeService.update({
            where: {
                id: timeService.id
            },
            data: {
                startHour,
                endHour
            }
        })
        return new Response(JSON.stringify({ msg: `updated to ${timeServiceUpdated.startHour} - ${timeService.endHour}` }))
    } else {
        return new Response(JSON.stringify({ error: "tims service does not exists" }))
    }
}