import fetch from 'isomorphic-fetch';

export function fetchMovie(query, year) {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=8c223c3b3bc8a2684301ab2cf8dba71c&language=ru-RU&query=${query}&page=1&include_adult=false&year=${year}`;
    return fetch(endpoint);
}

export function fetchMovieDetails(id){
    const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=8c223c3b3bc8a2684301ab2cf8dba71c&language=ru-RU`;
    return fetch(endpoint);
}