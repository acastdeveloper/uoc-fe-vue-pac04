import axios from 'axios'

export const myAPITotal = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf'
    },

})

export const getPokesTotal = async () => {
    const result = await myAPITotal.get('/pokemon-species');
    return result;
}
