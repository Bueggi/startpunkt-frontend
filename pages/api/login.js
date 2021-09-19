import { API_URL } from "@/config/index";
import AuthContext from "@/context/authContext";
import cookie from 'cookie'
import { useState } from "react";

const login = async (req, res) => {

    if (req.method === 'POST') {
        const { identifier, password } = req.body

        const strapi = await fetch(`https://secure-escarpment-39746.herokuapp.com/auth/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier,
                password
            })
        })

        const data = await strapi.json()


        if (strapi.ok) {
            res.setHeader('Set-Cookie', cookie.serialize('token', data.jwt, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: 'strict',
                path: '/'
            }))
            res.status(200).json({ user: data.user })
        }
        else {
            res.status(data.statusCode).json({ message: data.message[0].messages[0].message })
        }

    }
    else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({ message: `Method ${req.method} is not allowed` })
    }
}

export default login