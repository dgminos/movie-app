import React, { useState, useEffect, FC } from 'react'
import { fetchMovies } from '../../../../utils/api'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import { Movie } from '../../../../utils/api'
import './slider.css'


const Slider: FC = () => {
    const [movieResults, setMovieResults] = useState<Movie[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            setMovieResults(await fetchMovies('25/recommendations', 1280))
        };
        fetchData();
    }, []);

    const carouselItems = movieResults.slice(0, 6).map((item: Movie, index: number) => {
        return (
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    key={index}
                    style={{ height: 600 }}
                    src={item.backdrop_path}
                    alt={item.title}
                />
                <Carousel.Caption>
                    <div className='carousel-caption'>
                        <h3>{item.title}</h3>
                        <p>{item.overview}</p>
                        <Button href='/movie/:id'>See more...</Button>
                    </div>
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
