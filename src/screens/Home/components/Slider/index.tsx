import React, { useState, useEffect, FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import { Movie, fetchMovies } from '../../../../fetch/fetchMovies'
import './slider.css'


const Slider: FC = () => {
    const [movieResults, setMovieResults] = useState<Movie[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            setMovieResults(await fetchMovies('11/recommendations', 1280))
        };
        fetchData();
    }, []);

    const carouselItems = movieResults.slice(0, 6).map((item: Movie, index: number) => {
        return (
            <Carousel.Item>
                <img
                    className='d-block slider'
                    key={index}
                    // style={{ height: 400 }}
                    src={item.backdrop_path}
                    alt={item.title}
                />
                <Carousel.Caption className='carousel-caption mb-5'>

                    <h3>{item.title}</h3>
                    <p>{item.overview}</p>
                    <Button href='/movie/:id'>See more...</Button>

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
