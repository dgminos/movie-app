import React, { FC } from 'react'
// import { Layout } from '../../components'
import { Slider } from './components/Slider'
import { Cards } from '../../components/Cards'
// import { List } from './components/List'
import { Header, Footer } from '../../components/Layout/components'
import './home.css'

const Home: FC = () => {
    return (
        <>
            <Header />
            <div className="main-pg">
                <Slider />
                <Cards amount={10} dataPath={'popular'} title='Popular' />
                <Cards amount={10} dataPath={'top_rated'} title='Top Rated' />
            </div>
            <Footer />
        </>
    )
}

export { Home }





