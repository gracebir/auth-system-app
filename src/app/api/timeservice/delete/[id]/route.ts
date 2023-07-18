import prisma from "@/lib/prisma";

export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    const timeService = await prisma.timeService.findUnique({
        where: {
            id: +params.id
        }
    })

    if (timeService) {
        const timeServiceDeleted = await prisma.timeService.delete({
            where: {
                id: timeService.id
            }
        })
        return new Response(JSON.stringify({ msg: `time service ${timeServiceDeleted.id} deleted!!` }))
    } else {
        return new Response(JSON.stringify({ error: "open days does not exists" }))
    }
}