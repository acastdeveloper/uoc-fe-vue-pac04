import axios from 'axios'
const myAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf'
    },
})

export default {
    getPokes(id) {
        // return myAPI.get('/');
        return myAPI.get(`/pokemon/${id}`);
    }
}
