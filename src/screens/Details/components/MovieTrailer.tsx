import React from 'react'
import { FC, useEffect, useState } from 'react'
import { } from 'react-bootstrap-icons';
import { Video } from '../../../types';
import { fetchMovieTrailer } from './fetchMovieTrailer'
import './movieTrailer.css'

const MovieTrailer: FC = () => {

    const [trailer, setTrailer] = useState<Video>({ id: 0, name: '', key: '', type: '', size: 0 });
    const renderTrailer = (trailer.id !== 0)
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    useEffect(() => {
        console.log('id: ' + id)
        if (id)
            fetchMovieTrailer(`/movie/${id}/videos?`)
                .then((result) => {
                    setTrailer(result?.trailer)
                })
    }, [id])

    let htmlTrailer =
        <>
            <h5>Watch Trailer</h5>
            <iframe
                className="trailer"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </>
    return (
        <>
            {renderTrailer ? htmlTrailer : null}
        </>
    )
}

export { MovieTrailer }
