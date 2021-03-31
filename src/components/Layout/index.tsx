import React, { FC } from 'react'
import { Footer, Header } from './components'
import './layout.css'

interface Props {
    hideHeader?: boolean;
    hideFooter?: boolean;
}

const Layout: FC<Props> = ({ children, hideHeader, hideFooter = false }) => {
    return (
        // <div className="layout">
        <div className="contenedor">
            {!hideHeader && <Header />}
            {children}
            {!hideFooter && <Footer />}
        </div>
        // </div>
    )
}

export { Layout }
