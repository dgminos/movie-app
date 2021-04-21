
import { AxiosResponse } from "axios";
import { Movie, MovieDBResponse } from "../../types";

import { api } from "../../utils";

const fetchData = async (queryParam: string) => {
    let response: AxiosResponse<MovieDBResponse> = await api.get('/search/movie', {
        params: {
            page: 1,
            query: queryParam
        }
    });
    const moviesWithImages: Movie[] = response.data.results.map((m: Movie) => ({
        id: m.id,
        backdrop_path: 'https://image.tmdb.org/t/p/w500' + m.backdrop_path,
        popularity: m.popularity,
        title: m.title,
        poster_path: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
        overview: m.overview,
        vote_average: m.vote_average,
        genres: m.genres,
        release_date: m.release_date,
        video: m.video
    }));
    return { moviesWithImages, response }
}

export { fetchData }