import React, { FC } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner';
import { Layout } from '../../components'
import { Cards } from '../../components/Cards'
import { useFetch } from '../../hooks';
import Paginate from 'react-paginate'
import { Alert } from 'react-bootstrap';

const Popular: FC = () => {
    const path = '/movie/popular';

    const requiredImageWidth = 500;

    const [{ loading, data, error }, doFetchPage] = useFetch(path, requiredImageWidth, 1);


    if (loading) {
        return (
            <Spinner animation='grow' variant='primary' role='status' style={{ position: 'fixed', top: '50%', left: '50%' }}>
                <span className='sr-only'>Loading...</span>
            </Spinner>
        )
    }

    if (error) {
        return (
            <Alert variant='danger text-center' className='error-alert'>
                <Alert.Heading>An error has occurred.</Alert.Heading>
                <p>
                    Please try again by refreshing the page.
            </p>
            </Alert>
        )
    }

    return (
        <Layout>
            <Cards amount={20} results={data.results} title='Popular' />

            <Paginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={data.total_pages}
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
