import prisma from "@/lib/prisma";

type requestBody = {
    name: string
}

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    const { name }: requestBody = await request.json()
    
    const store = await prisma.store.findUnique({
        where: {
            id: +params.id
        }
    })

    if (store) {
        const storeUpdated = await prisma.store.update({
            where: {
                id: store.id
            },
            data: {
                name
            }
        })
        return new Response(JSON.stringify({ msg: `${storeUpdated.name} updated` }))
    } else {
        return new Response(JSON.stringify({ error: "open days does not exists" }))
    }
}