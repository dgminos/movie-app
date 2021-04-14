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
        // <div className="layout-container">
        <>
            {!hideHeader && <Header />}
            <main className='layout-main'>
                <div className="layout-main-container">{children}</div>
            </main>
            {!hideFooter && <Footer />}
        </>
        //  </div> 
        // </div>
    )
}

export { Layout }
