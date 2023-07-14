import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import cookie from 'cookie'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res:NextApiResponse){
    if(req.method === "POST"){
        const { email, password } = req.body
        if(!email || !password) return res.status(502).json({msg: 'please fill all fields'})
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(!user) return res.status(502).json({msg: 'User does not exist'})
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(502).json({msg: "Incorrect password!!"})
        jwt.sign(
            {id: user.id},
            "secret-key",
            {expiresIn: "7d"},
            (err, token) => {
                if(err) throw err
                res.setHeader(
                    "Set-Cookie",
                    cookie.serialize("token", token!,{
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== "development",
                        maxAge: 3600 * 60,
                        sameSite: "strict",
                        path: "/"
                    } )
                )
            }
        )
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        return res.status(405).json({ msg: 'Method not allowed' });
    }
}