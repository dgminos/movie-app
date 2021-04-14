import React, { FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import { Movie, useFetch } from '../../../../hooks/useFetch'
import { Link } from 'react-router-dom'
import { Alert, Spinner } from 'react-bootstrap'
import './slider.css'

const Slider: FC = () => {

    const endpoint = "11/recommendations";
    const imageWidth = 1280;
    const [{ loading, response, error }] = useFetch(endpoint, imageWidth, 1);

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
    const carouselItems = response.results.slice(0, 6).map((item: Movie, index: number) => {
        return (
            <Carousel.Item>
                <img
                    className='d-block slider'
                    key={index}
                    style={{ height: 550 }}
                    src={item.backdrop_path}
                    alt={item.title}
                />
                <Carousel.Caption className='carousel-caption mb-5'>
                    <h3>{item.title}</h3>
                    <p>{item.overview}</p>
                    <Link to={`/details/${item.id}`}>
                        <Button href='/movie/:id' style={{ fontSize: 20 }}>See more...</Button>
                    </Link>
                </Carousel.Caption>

            </Carousel.Item>
        )
    })
    return (
        <Carousel fade>
            {carouselItems}
        </Carousel>
    )
}
export { Slider }
