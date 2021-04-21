
import { useEffect, useState } from 'react'
import { api } from '../utils'
import { AxiosResponse } from 'axios'
import { Movie, MovieDBResponse } from '../types';

const imageURL = 'https://image.tmdb.org/t/p/';

export const useFetch = (endpoint: string, posterImageSize: number, initialPage: number) => {

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
                const posterSize = 'w' + posterImageSize.toString();
                const backdropSize = 'w1280';
                let response: AxiosResponse<MovieDBResponse> = await api.get(endpoint, {
                    params: {
                        page: page,
                        query: query
                    }
                });
                const moviesWithImages: Movie[] = response.data.results.map((m: Movie) => ({
                    id: m.id,
                    backdrop_path: m.backdrop_path ? imageURL + backdropSize + m.backdrop_path : null,
                    popularity: m.popularity,
                    title: m.title,
                    poster_path: m.poster_path ? imageURL + posterSize + m.poster_path : null,
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
    }, [endpoint, posterImageSize, page, query]
    )

    return [{ loading, data, error, page }, setPage, setQuery] as const
}
