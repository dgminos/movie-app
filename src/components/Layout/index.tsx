import React, { FC } from 'react'
import { Footer, Header } from './components'
import './layout.css'

interface Props {
    hideHeader?: boolean;
    hideFooter?: boolean;
}

const Layout: FC<Props> = ({ children, hideHeader, hideFooter = false }) => {
    return (
        <>
            {!hideHeader && <Header />}
            <main className='layout-main'>
                {children}
            </main>
            {!hideFooter && <Footer />}
        </>
    )
}

export { Layout }
