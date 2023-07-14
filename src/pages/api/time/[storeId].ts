import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const query = req.query
    const { storeId } = query
    if (req.method === "GET") {
        try {
            const id = parseInt((storeId!)?.toString())
            const timeService = await prisma.timeService.findMany({
                where: {
                    storeId: id
                }
            })
            res.statusCode = 200
            res.json(timeService)
        } catch (error) {
            console.log(error)
        }
    } else {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

}