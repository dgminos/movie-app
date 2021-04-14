
import { useEffect, useState } from 'react'
import { api } from '../utils'



export type MovieDBResponse = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}

export type Movie = {
    id: number,
    backdrop_path: string,
    popularity: number,
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number
}

const imageURL = 'https://image.tmdb.org/t/p/';

export const useFetch = (endpoint: string, imageWidth: number, initialPage: number) => {

    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState<MovieDBResponse>({ page: 1, results: [], total_pages: 1, total_results: 1 })
    // const [response, setResponse] = useState<MovieDBResponse | Movie>({ page: 1, results: [], total_pages: 1, total_results: 1 })
    const [page, setPage] = useState(initialPage)
    const [error, setError] = useState(false)


    useEffect(() => {

        const fetchData = async () => {
            setError(false)
            setLoading(true)
            try {
                const picSize = 'w' + imageWidth.toString();
                const { data } = await api.get(endpoint, {
                    params: {
                        page: page
                    }
                });
                const moviesWithImages: Movie[] = data.results.map((m: Movie) => ({
                    id: m.id,
                    backdrop_path: imageURL + picSize + m.backdrop_path,
                    popularity: m.popularity,
                    title: m.title,
                    poster_path: imageURL + picSize + m.poster_path,
                    overview: m.overview,
                    vote_average: m.vote_average,
                }));

                console.log('fetched data for page ' + page)
                //   console.log('movie results with full image urls: ' + JSON.stringify(moviesWithImages));

                setResponse({ page: data.page, results: moviesWithImages, total_pages: data.total_pages, total_results: data.total_results });
            } catch (error) {
                setError(true)
                console.log('error caught while fetching data: ' + error);
            }
            finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [endpoint, imageWidth, page]
    )

    return [{ loading, response, error }, setPage] as const
}
