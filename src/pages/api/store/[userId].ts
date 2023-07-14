import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const query = req.query
    const { userId } = query
    if (req.method === "GET") {
        try {
            const id = parseInt((userId!)?.toString())
            const store = await prisma.store.findMany({
                where: {
                    userId: id
                }
            })
            res.statusCode = 200
            res.json(store)
        } catch (error) {
            console.log(error)
        }
    } else {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

}