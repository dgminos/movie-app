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

export interface CardsProps {
    amount: number,
    results: Movie[],
    title: string
}

export interface ListProps {
    endpoint: string
    title: string
}