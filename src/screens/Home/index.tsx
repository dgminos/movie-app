import React, { FC } from 'react'
import { Slider } from './components/Slider'
import './home.css'
import { Layout } from '../../components'
import { List } from '../../components/List'
import { Container } from 'react-bootstrap'

const Home: FC = () => {

    const popular = '/popular';
    const topRated = '/top_rated';

    return (
        <Layout>
            <div className='main-pg'>
                <Slider />
                <Container className='wraper'>
                    <div className='list-group'>
                        <div className='popular-list'>
                            <List endpoint={popular} title='Popular'></List>
                        </div>
                        <div className='top-rated-list'>
                            <List endpoint={topRated} title='Top Rated'></List>
                        </div>

                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export { Home }





