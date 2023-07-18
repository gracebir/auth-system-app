'use client';
import React from 'react'
import { SessionProvider } from "next-auth/react"

type prop = {
    children: React.ReactNode
}

const Provider = ({children}:prop) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider