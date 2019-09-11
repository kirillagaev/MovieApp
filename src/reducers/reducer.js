import initialState from '../constants/initialState';
import * as types from '../constants/types';

function mainReducer(state = initialState, action) {
    switch(action.type){
        case types.app.MOVIE_TITLE:{
            let nextState = Object.assign({}, state);
            nextState.query = action.title;
            return nextState;
        }
        case types.app.MOVIE_YEAR:{
            let nextState = Object.assign({}, state);
            nextState.filter = action.year;
            return nextState;
        }
        case types.app.CLEAR_STATE:{
            return initialState;
        }
        case types.app.FIND_FILM:{
            let nextState = Object.assign({}, state);
            nextState.list = action.list;
            nextState.show = action.show;
            return nextState;
        }
        case types.details.MOVIE_DETAILS:{
            let nextState = Object.assign({}, state);
            nextState.details = action.details;
            nextState.isLoading = action.isLoading;
            return nextState;
        }
        case types.details.IS_LOADING:{
            let nextState = Object.assign({}, state);
            nextState.isLoading = action.isLoading;
            return nextState;
        }
        default:
            return state;
    }
}

export default mainReducer;