import prisma from "@/lib/prisma"

type requestBody = {
    name: string
    userId: number
}

export async function POST(request: Request){
    const {name, userId}:requestBody = await request.json()

    if(!name || !userId) return new Response(JSON.stringify({error: "provider the name please"}))

    const store = await prisma.store.create({
        data: {
            name,
            userId
        }
    })

    const result = store
    return new Response(JSON.stringify(result))
}