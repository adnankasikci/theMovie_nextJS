"use client"

import React from 'react'
import { ThemeProvider } from 'next-themes'

const Provider = ({ children }) => {
    return (
        <ThemeProvider enableSystem={true} attribute='class'>
            {children}
        </ThemeProvider>
    )
}

export default Provider
