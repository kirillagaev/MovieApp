import fetch from 'isomorphic-fetch';

function fetchMovie(query, year) {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=&language=ru-RU&query=${query}&page=1&include_adult=false&year=${year}`;
    return fetch(endpoint)
}

export default fetchMovie;