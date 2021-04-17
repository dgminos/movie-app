import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useFetch } from '../../hooks';
import { Cards } from '../Cards';


interface SearchResultsProps {
    query: string
}

const SearchResults: FC<SearchResultsProps> = ({ query }) => {

    const path = '/search/movie';
    const requiredImageWidth = 500;

    const [{ loading, data, error }, doFetchPage, doFetchQuery] = useFetch(path, requiredImageWidth, 1);

    //const [query, setQuery] = useState('');

    const history = useHistory();

    // const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setQuery(e.target.value)
    //doFetchQuery(query)
    //doFetchPage(1)
    // };

    useEffect(() => {
        history.push(`/search?s=${query}` ?? 'a');
        console.log("query: " + query)
        doFetchQuery(query)
        doFetchPage(1)

    }, [query, history, doFetchPage, doFetchQuery])

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
        <Cards amount={20} results={data.results} title='Search results' />
    )
}

export { SearchResults }
