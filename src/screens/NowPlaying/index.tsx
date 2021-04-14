import React, { FC, useState } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
import { Layout } from '../../components'
import { Cards } from '../../components/Cards'
import { useFetch } from '../../hooks'
import ReactPaginate from 'react-paginate'
import './nowPlaying.css'

const NowPlaying: FC = () => {

    // const initialPage = 1;
    const endpoint = '/now_playing';
    const requiredImageWidth = 500;
    // const [currentPage, setCurrentPage] = useState(initialPage)
    const [{ loading, response, error }, doFetchPage] = useFetch(endpoint, requiredImageWidth, 1);

    if (loading) {
        return (
            <Spinner animation='grow' variant='primary' role='status' style={{ position: 'fixed', top: '50%', left: '50%' }}>
                <span className='sr-only'>Loading...</span>
            </Spinner>
        )
    }
    if (error) {
        return <p>:(</p>
    }
    return (
        <Layout>
            <Cards amount={20} results={response.results} title='Now Playing' />

            <ReactPaginate
                // initialPage={1}
                // forcePage={selectedItem.selected}
                previousLabel={<i className="bi bi-caret-left"></i>}
                nextLabel={<i className="bi bi-caret-right"></i>}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={response.total_pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={(selectedItem) => { doFetchPage(selectedItem.selected + 1) }}
                containerClassName={'pagination'}
                activeClassName={'active'}
            // disableInitialCallback={true}
            // onPageActive={(selectedItem) => doFetchPage(selectedItem.page)}

            />

        </Layout>

    )
}

export { NowPlaying }
