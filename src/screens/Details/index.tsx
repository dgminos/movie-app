
import React, { FC, useEffect, useState } from 'react'
import { Layout } from '../../components';
import { Movie } from '../../hooks/useFetch';
import { fetchData } from './fetchData'
import { MovieTrailer } from './components/MovieTrailer'
import StarRatingComponent from 'react-star-rating-component';
import './details.css'

const Details: FC = () => {

    const [movie, setMovie] = useState<Movie>({ id: 0, backdrop_path: '', popularity: 0, title: '', poster_path: '', overview: '', vote_average: 0, genres: [], release_date: '', video: false })
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    // const renderResults = (movie.id != 0)

    useEffect(() => {
        console.log('id: ' + id)
        if (id)
            fetchData(id)
                .then((response) => {
                    setMovie(response.result)
                })
    }, [id])
    console.log(movie)
    // mostrar placeholder si el movie.poster_path es nulo
    // const resultsJsx = () => {
    return (
        <Layout>
            <div className='details-container'>
                <div className='movie-background' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` }}>
                </div>
                <div className='row'>
                    <div className='col-sm-6 movie-info-poster'>

                        <img className='movie-poster' src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                            alt='movie poster'>
                        </img>
                    </div>
                    <div className='col-sm-6 movie-info-header mt-1'>
                        <div className='row'>
                            <h2>{movie.title}</h2>
                            <span style={{ fontSize: 20 }}>Release Date: {movie.release_date}</span>
                            <span style={{ fontSize: 20 }}>Rated: {movie.vote_average}</span>
                        </div>
                        <div className='row'>
                            <div className='star'>
                                <StarRatingComponent
                                    name={`rate` + movie.id}
                                    starCount={10}
                                    value={movie.vote_average}
                                    starColor={'#0066ff'}
                                ></StarRatingComponent>
                            </div>
                        </div>
                        <div className='row movie-info-content'>
                            <h3>Overview</h3>
                            <p className='overview'>{movie.overview}</p>
                            {movie.genres &&
                                <>
                                    <h3>Genres</h3>
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
        </Layout>
    )
}

// return (

//     <Layout>

//         { renderResults ? resultsJsx : null}

//     </Layout>
// )

export { Details }
