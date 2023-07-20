import prisma from "@/lib/prisma";

export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    const openDay = await prisma.openDay.findUnique({
        where: {
            id: +params.id
        }
    })

    if (openDay) {
        const openDayDeleted = await prisma.openDay.delete({
            where: {
                id: openDay.id
            }
        })
        return new Response(JSON.stringify(openDayDeleted), {
            headers: { "Content-Type": "application/json" },
        })
    } else {
        return new Response(JSON.stringify({ error: "open days does not exists" }))
    }
}