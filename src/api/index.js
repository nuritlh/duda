import axios from 'axios';

export default {
    getMovies,
}

function getMovies() {

    return axios.get('https://swapi.co/api/films/')
        .then(function (response) {
            console.log('api response', response);
        })
        .catch(function (error) {
            console.log('api error', error);
        })
}