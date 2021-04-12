import React, { FC } from 'react'
import { Image, ListGroup, Spinner } from 'react-bootstrap'
import { Movie, useFetch } from '../../hooks/useFetch'
import './listContainer.css'

interface ListContainerProps {
    endpoint: string
}

const ListContainer: FC<ListContainerProps> = ({ endpoint }) => {

    const imageWidth = 92;
    const [{ loading, response, error }] = useFetch(endpoint, imageWidth, 1);

    if (loading) {
        return (
            <Spinner animation='grow' variant='primary' role='status' style={{ position: 'fixed', top: '50%', left: '50%' }}>
                <span className='sr-only'>Loading...</span>
            </Spinner>
        )
    }

    if (error) {
        // return (<p>:(</p>)
    }

    const listItems = response.results.slice(0, 10).map((item: Movie) => {
        return (

            <div className='scroll'>
                <ListGroup.Item >
                    <Image src={item.poster_path} rounded />
                    <span>{item.title}</span>
                    <a className='detail-button' href={'/details/' + item.id}>
                        <i className='bi bi-info-circle'></i>
                    </a>
                </ListGroup.Item>
            </div>
        )
    })

    return (
        <div className='row list-row justify-content-center mt-5'>
            <div className='col-12 list-table-col'>
                <h4 className='list-group header-list text-center'>Popular Movies</h4>
                <ListGroup>
                    {listItems}
                </ListGroup>
            </div>
        </div>
    );

}

export { ListContainer }