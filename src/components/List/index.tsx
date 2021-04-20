import React, { FC } from 'react'
import { Alert, Button, Image, ListGroup, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Movie, useFetch } from '../../hooks/useFetch'
import './list.css'

interface ListProps {
    endpoint: string
    title: string
}

const List: FC<ListProps> = ({ endpoint, title }) => {

    const imageWidth = 92;
    const [{ loading, data, error }] = useFetch(endpoint, imageWidth, 1);

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

    const listItems = data.results.slice(0, 10).map((item: Movie) => {

        return (
            <ListGroup.Item key={item.id}>
                <Link to={`/movie/?id=${item.id}`} className='list-link'>
                    <Image className='list-img' src={item.poster_path!} />
                    <span className='movie-title'>{item.title}</span>
                    <Button className='list-chevron-btn'>
                        <i className='bi bi-chevron-right'></i>
                    </Button>
                </Link>
            </ListGroup.Item >
        )
    })

    return (
        <ListGroup className='list'>
            <h4 className='header-list'>{title}</h4>
            <div className='scroll'>
                {listItems}
            </div>
        </ListGroup>
    )
}

export { List }