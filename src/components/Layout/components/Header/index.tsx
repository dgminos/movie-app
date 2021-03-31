import React, { FC } from 'react'
import { Navbar } from './components'
import './header.css'

const Header: FC = () => {
    return (
        <header className="layout-header">
            <Navbar />
        </header>
    )
}

export { Header }
