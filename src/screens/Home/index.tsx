import React, { FC } from 'react'
import { Layout } from '../../components'
import { Slider } from './components/Slider'
import { Cards } from './components/Cards'

const Home: FC = ({ children }) => {
    return (
        <Layout>
            <Slider />
            <Cards amount={10} dataPath={'popular'} title='Popular' />
            <Cards amount={10} dataPath={'top_rated'} title='Top Rated' />
            {children}
        </Layout>
    )
}

export { Home }





