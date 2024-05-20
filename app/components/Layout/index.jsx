import React from 'react'
import { Footer } from '../Footer'
import { Nav } from '../Nav/nav'

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen select-none">
            <Nav />
            {children}
            <Footer />
        </div>
    )
}
