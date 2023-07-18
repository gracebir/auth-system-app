import prisma from "@/lib/prisma"

type requestBody = {
    startDay: string
    endDay: string
    storeId: number
}

export async function POST(request: Request){
    const {startDay, endDay, storeId}:requestBody = await request.json()

    if(!startDay || !endDay || !storeId) return new Response(JSON.stringify({error: "please fill all the fields"}))

    const openDay = await prisma.openDay.create({
        data: {
            startDay,
            endDay,
            storeId
        }
    })

    const result = openDay
    return new Response(JSON.stringify(result))
}