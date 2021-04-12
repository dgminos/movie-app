import React, { FC } from 'react'
// import { Layout } from '../../components'
import { Slider } from './components/Slider'
//import { Cards } from '../../components/Cards'
// import { List } from './components/List'
import { Header, Footer } from '../../components/Layout/components'
import './home.css'
//import { useFetch } from '../../hooks'
//import Spinner from 'react-bootstrap/esm/Spinner'
import { Layout } from '../../components'
//import Paginate from 'react-paginate'
import { ListContainer } from '../../components/ListContainer'

const Home: FC = () => {

    const topRated = "/top_rated";
    const popular = "/popular;"

    return (
        <>
            <Layout>
                <div className="main-pg">
                    <Slider />
                    <ListContainer endpoint={topRated}></ListContainer>
                    <ListContainer endpoint={popular}></ListContainer>
                </div>
            </Layout>
        </>
    )
}

export { Home }





