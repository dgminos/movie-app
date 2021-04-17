import React, { FC } from 'react'
import { useFetch } from '../../hooks';

interface DetailProps {
    id: number
}

const Details: FC<DetailProps> = (id) => {

    const endpoint = "movie/" + id;
    const imageWidth = 1280;

    // const [{ loading, response, error }] = useFetch(endpoint, imageWidth, 1);


    return (
        <p>
            {/* Title: {response. */}
        </p>
    )
}

export { Details }
