import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res:NextApiResponse){ 
    if(req.method === "POST"){
        const {name, email, password } = req.body
        if(!name || !email || !password) return res.status(502).json({msg: 'please fill all fields'})
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(user) return res.status(502).json({msg: 'User already exists'})
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(password, salt, async (error, hash)=> {
                try {
                    const user = await prisma.user.create({
                        data: {
                            name,
                            email,
                            password: hash
                        }
                    })
                    res.status(200).json({msg: `user ${user.name} created`})
                } catch (error) {
                    res.status(502).json({error})
                }
                
            })
        })
    } else{
        return res.status(405).json({ msg: 'Method not allowed' });
    }
}