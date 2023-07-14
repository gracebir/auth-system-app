import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res:NextApiResponse){
    if(req.method === "POST"){
        const { startDay, endDay, userId } = req.body
        if(!startDay || !endDay || userId) return res.status(502).json({msg: "field can't be empty"})
        try {
            const range = await prisma.store.create({
                data: {
                    startDay,
                    endDay,
                    userId
                }
            })
            res.statusCode = 200
            res.json({range})
        } catch (error) {
            
        }
        
    } else {
        return res.status(405).json({ msg: 'Method not allowed' });
    }
}