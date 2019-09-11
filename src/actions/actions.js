import * as types from '../constants/types';
import * as API from "../http/fetch";

export function enterMovieTitle(title) {
    return {
        type: types.app.MOVIE_TITLE,
        title
    }
}

export function enterMovieYear(year){
    return {
        type: types.app.MOVIE_YEAR,
        year
    }
}

export function clearState(){
    return {
        type: types.app.CLEAR_STATE,
    }
}

export function isLoading(){
    return {
        type: types.details.IS_LOADING,
        isLoading: true
    }
}

export function findFilm(query, filter) {
    return dispatch => {
        API.fetchMovie(query, filter).then(res => {
            return res.json().then(res =>
                dispatch({
                    type: types.app.FIND_FILM,
                    list: res.results,
                    show: true
                }))
        }).catch(()=> console.log("Ошибочка вышла!"));
    }
}

export function movieDetails(id) {
    return dispatch => {
        API.fetchMovieDetails(id).then(res=>{
            return res.json().then(res=>
                dispatch({
                    type: types.details.MOVIE_DETAILS,
                    details: res,
                    isLoading: false
                })
            )
        }).catch(()=>console.log("Ошибочка вышла!"))
    }
}