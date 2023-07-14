import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res:NextApiResponse){
    if(req.method === "POST"){
        const { startHour, endHour, storeId } = req.body
        if(!startHour || !endHour || !storeId) return res.status(502).json({msg: "fields can't be empty"})
        try {
            const range = await prisma.timeService.create({
                data: {
                    startHour,
                    endHour,
                    storeId
                }
            })
            res.statusCode = 200
            res.json({range})
        } catch (error) {
            console.log(error)
        }
        
    } else {
        return res.status(405).json({ msg: 'Method not allowed' });
    }
}