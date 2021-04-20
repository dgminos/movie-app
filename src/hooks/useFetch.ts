
import { useEffect, useState } from 'react'
import { api } from '../utils'
import { AxiosResponse } from 'axios'

export type MovieDBResponse = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}

export type Movie = {
    id: number,
    backdrop_path: string | null,
    popularity: number,
    title: string,
    poster_path: string | null,
    overview: string,
    vote_average: number,
    genres: Genre[],
    release_date: string,
    video: boolean
}

export type Genre = {
    id: number,
    name: string
}

export type VideoResponse = {
    id: number,
    results: Video[]
}

export type Video = {
    id: number,
    name: string,
    key: string,
    type: string,
    size: number
}

const imageURL = 'https://image.tmdb.org/t/p/';

export const useFetch = (endpoint: string, imageWidth: number, initialPage: number) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<MovieDBResponse>({ page: 1, results: [], total_pages: 1, total_results: 1 })
    const [page, setPage] = useState(initialPage)
    const [query, setQuery] = useState(' ')
    const [error, setError] = useState(false)

    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            setError(false)
            setLoading(true)
            try {
                console.log("query en useFetch:" + query);
                const picSize = 'w' + imageWidth.toString();
                let response: AxiosResponse<MovieDBResponse> = await api.get(endpoint, {
                    params: {
                        page: page,
                        query: query
                    }
                });
                const moviesWithImages: Movie[] = response.data.results.map((m: Movie) => ({
                    id: m.id,
                    backdrop_path: m.backdrop_path ? imageURL + picSize + m.backdrop_path : null,
                    popularity: m.popularity,
                    title: m.title,
                    poster_path: m.poster_path ? imageURL + picSize + m.poster_path : null,
                    overview: m.overview,
                    vote_average: m.vote_average,
                    genres: m.genres,
                    release_date: m.release_date,
                    video: m.video
                }));

                console.log('fetched data for page ' + page + ' and query ' + query + ". status: " + response.status + " " + response.statusText);
                if (!ignore) setData({ page: response.data.page, results: moviesWithImages, total_pages: response.data.total_pages, total_results: response.data.total_results });
            } catch (error) {
                setError(true)
                console.log('error caught while fetching data: ' + error);
            }
            finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [endpoint, imageWidth, page, query]
    )

    return [{ loading, data, error, page }, setPage, setQuery] as const
}
