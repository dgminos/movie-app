
import { api } from '../utils'

const posterURL = 'https://image.tmdb.org/t/p/'
// const moviePath = "/movie/";
// const nowPlaying = movie + "/now_playing";
// const topRated = movie + "/top_rated";
// const popular = movie + "/popular";
// const latest = movie + "/latest";
// const detail = movie + "/movie_id";

export type Movie = {
    id: number,
    backdrop_path: string,
    popularity: number,
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number
}

export const fetchMovies = async (path: string, imageWidth: number) => {

    try {
        const picSize = "w" + imageWidth.toString();
        const { data } = await api.get(path);
        console.log("fetched this unmapped data: " + JSON.stringify(data));

        const mappedResults = data['results'].map((m: Movie) => ({
            id: m.id,
            backdrop_path: posterURL + picSize + m.backdrop_path,
            popularity: m.popularity,
            title: m.title,
            poster_path: posterURL + picSize + m.poster_path,
            overview: m.overview,
            vote_average: m.vote_average,
        }));
        console.log('mapped data: ' + JSON.stringify(mappedResults));
        return mappedResults;

    } catch (error) {
        console.log("error caught while fetching data: " + error);
    }
}
