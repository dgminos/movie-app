import React, { FC, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Cards, Layout } from '../../components';
import { MovieDBResponse } from '../../hooks/useFetch';
import { fetchData } from './api'

const Search: FC = () => {

    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get('s');
    const { push } = useHistory();
    const [data, setData] = useState<MovieDBResponse>({ page: 1, results: [], total_pages: 1, total_results: 1 })
    const [query, setQuery] = useState(queryParam ?? '');

    const renderResults = (query?.length > 0 && data.results.length > 0)

    useEffect(() => {
        push(`/search?s=${query !== '' ? query : ' '}`);

        fetchData(query).then(({ response, moviesWithImages }) => {
            setData({ page: response.data.page, results: moviesWithImages, total_pages: response.data.total_pages, total_results: response.data.total_results });
        }
        );

    }, [query, push]);

    return (
        <Layout>
            <Form className='container col-6 search-group'>
                <Form.Group>
                    <h2 className='title-search mt-5 mb-3 text-center'>Search Movie</h2>
                    <Form.Control className='search-bar' type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
                </Form.Group>
            </Form>
            {renderResults ? <Cards amount={data.results.length} results={data.results} title='Search Results' /> : null}
        </Layout >
    )
}

export { Search }
