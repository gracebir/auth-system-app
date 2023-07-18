import prisma from "@/lib/prisma";

export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    const store = await prisma.store.findUnique({
        where: {
            id: +params.id
        }
    })

    if (store) {
        const storeDeleted = await prisma.store.delete({
            where: {
                id: store.id
            }
        })
        return new Response(JSON.stringify({ msg: `store ${storeDeleted.name} deleted!!` }))
    } else {
        return new Response(JSON.stringify({ error: "store does not exists" }))
    }
}