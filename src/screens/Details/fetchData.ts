
import { AxiosResponse } from "axios";
import { Movie } from "../../hooks/useFetch";
import { api } from "../../utils";


const fetchData = async (id: string) => {
    let response: AxiosResponse<Movie> = await api.get('/movie/' + id)
    console.log("fetched movie detail: " + JSON.stringify(response.data))
    const result = response.data;
    return { result } as const
};

export { fetchData }