import prisma from "@/lib/prisma"

type requestBody = {
    name: string
    userId: number
}

export async function POST(request: Request){
    const {name, userId}:requestBody = await request.json()

    if(!name || !userId) return new Response(JSON.stringify({error: "provider the name please"}), {status:501})

    const existedName = await prisma.store.findUnique({
        where:{
            name
        }
    })

    if(existedName) return new Response(JSON.stringify({msg: 'You are trying to add an existed store!!'}), {status:401})

    const store = await prisma.store.create({
        data: {
            name,
            userId
        }
    })

    const result = store
    return new Response(JSON.stringify(result))
}