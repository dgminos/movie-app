import React, { FC } from 'react'
import { Layout } from '../../components'
import { Cards } from '../Home/components/Cards'

const Popular: FC = () => {
    return (
        <Layout>
            <Cards amount={20} dataPath={'popular'} title='Popular' />

        </Layout>
    )
}

export { Popular }
