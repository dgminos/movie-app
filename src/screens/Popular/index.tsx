import React, { FC } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner';
import { Layout } from '../../components'
import { Cards } from '../../components/Cards'
import { useFetch } from '../../hooks';
import Paginate from 'react-paginate'

const Popular: FC = () => {
    const path = "/popular";

    const requiredImageWidth = 500;

    const [{ loading, response, error }, doFetchPage] = useFetch(path, requiredImageWidth, 1);


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

    console.log("Popular results: " + JSON.stringify(response))

    return (
        <Layout>
            <Cards amount={20} results={response.results} title='Popular' />

            <Paginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={response.total_pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={4}
                onPageChange={(selectedItem) => doFetchPage(selectedItem.selected)}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </Layout>
    )
}

export { Popular }
