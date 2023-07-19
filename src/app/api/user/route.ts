import prisma from "@/lib/prisma"
import * as bcrypt from 'bcryptjs'

type requestBody = {
    name: string
    email: string
    password: string
}

export async function POST(request: Request) {
    const body:requestBody = await request.json()

    const existUser = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if(existUser) return new Response(JSON.stringify({error: 'user already exists'}), {status: 401})

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: await bcrypt.hash(body.password, 10)
        }
    })

    const { password,...result} = user;
    return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
    })
} 