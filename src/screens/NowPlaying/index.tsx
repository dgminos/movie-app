import React, { FC } from 'react'
import { Layout } from '../../components'
import { Cards } from '../Home/components/Cards'

const NowPlaying: FC = () => {
    return (
        <Layout>
            <Cards amount={20} dataPath={'now_playing'} title='Now Playing' />
        </Layout>
    )
}

export { NowPlaying }
