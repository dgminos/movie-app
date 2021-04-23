
import React, { FC, useEffect, useState } from 'react'
import { Layout } from '../../components';
import { fetchData } from './fetchData'
import { MovieTrailer } from './components/MovieTrailer'
import StarRatingComponent from 'react-star-rating-component';
import { Movie } from '../../types';
import imagenotfound from '../../assets/imagenotfound.png'
import './details.css'

const Details: FC = () => {

    const [movie, setMovie] = useState<Movie>({ id: 0, backdrop_path: '', popularity: 0, title: '', poster_path: '', overview: '', vote_average: 0, genres: [], release_date: '', video: false })
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    const posterAvailable = (movie.id !== 0 && movie.poster_path !== null)
    const backdropAvailable = (movie.id !== 0 && movie.backdrop_path !== null)
    const posterImg = <img className='movie-poster' alt='poster' src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}></img>
    const posterImgPlaceholder = <img className='movie-poster' alt='poster' src={imagenotfound}></img>

    useEffect(() => {
        console.log('id: ' + id)
        if (id)
            fetchData(id)
                .then((response) => {
                    setMovie(response.result)
                })
    }, [id])
    console.log(movie)

    return (
        <Layout>
            <div className='details-container' style={{ backgroundImage: backdropAvailable ? `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : '', backgroundSize: 'cover', backgroundPosition: 'center center', textShadow: '0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black' }}>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 movie-info-poster'>
                            {posterAvailable ? posterImg : posterImgPlaceholder}
                        </div>
                        <div className='col-lg-6 col-sm-12 movie-info-header'>
                            <div>
                                <h3>{movie.title}</h3>
                                <span style={{ fontSize: 20 }}>Release Date: {movie.release_date}</span>
                                <br></br>
                                <span style={{ fontSize: 20 }}>Rated: {movie.vote_average}</span>
                            </div>
                            <div>
                                <div className='star'>
                                    <StarRatingComponent
                                        name={`rate` + movie.id}
                                        starCount={10}
                                        value={movie.vote_average}
                                        starColor={'#0066ff'}
                                    ></StarRatingComponent>
                                </div>
                            </div>
                            <div className='movie-info-content'>
                                <h5>Overview</h5>
                                <p className='overview'>{movie.overview}</p>
                                {movie.genres &&
                                    <>
                                        <h5>Genres</h5>
                                        <ul>
                                            {movie.genres.map(genre =>
                                                <li className='gerne-list' key={genre.id}>{genre.name}</li>)}
                                        </ul>
                                    </>
                                }
                                <div className='movie-trailer'>
                                    <MovieTrailer />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export { Details }
