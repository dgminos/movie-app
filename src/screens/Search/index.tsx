import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Alert, Button, Card, Form, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Layout } from '../../components';
import { Movie, MovieDBResponse, useFetch } from '../../hooks/useFetch';
import { api } from '../../utils';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import { Cards } from '../../components/Cards';
import { SearchResults } from '../../components/SearchResults';
import './search.css'

const Search: FC = () => {

    const [query, setQuery] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <Layout>
            <Form className='container col-6 search-group'>
                <Form.Group>
                    <h2 className='title-search mt-5 mb-3 text-center'>Search Movie</h2>
                    <Form.Control className='search-bar' type='text' value={query} onChange={onChange} />
                </Form.Group>
            </Form>
            {query.length > 1 ? <SearchResults query={query} /> : null}
        </Layout >
    )
}

export { Search }
