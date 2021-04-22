
import { AxiosResponse } from 'axios';
import { Video, VideoResponse } from '../../../types';

import { api } from '../../../utils';

const fetchMovieTrailer = async (id: string) => {
    let response: AxiosResponse<VideoResponse> = await api.get(id + '/videos')
    console.log('fetched movie videos: ' + JSON.stringify(response.data))

    let videos: Video[] = response.data.results;

    let trailer: Video = { id: 0, name: '', size: 0, type: '', key: '' };
    if (videos.length > 0) {
        trailer = videos
            .filter(v => (v.type === 'Trailer'))
            .reduce((prev, current) => (prev.size > current.size) ? prev : current);
    }

    return { trailer } as const
};

export { fetchMovieTrailer }