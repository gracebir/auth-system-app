import prisma from "@/lib/prisma"

type requestBody = {
    startHour: number
    endHour: number
    dayId: number
}

export async function POST(request: Request){
    const {startHour, endHour, dayId}:requestBody = await request.json()

    if(!startHour || !endHour || !dayId) return new Response(JSON.stringify({error: "please fill all the field"}))

    const timeService = await prisma.timeService.create({
        data: {
            startHour,
            endHour,
            dayId
        }
    })

    const result = timeService
    return new Response(JSON.stringify(result))
}