import { LOAD_POKEMON, GET_POKEMON, SET_ERROR } from '../actions/appActions';

const initialState = {
    pokemonList: [],
    isFetching: false,
    error: ''
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                isFetching: true,
                pokemonList: []
            };
        case LOAD_POKEMON:
            return {
                ...state,
                pokemonList: [...state.pokemonList, ...action.payload],
                isFetching: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetching: false,
                error: `Error: ${action.payload}`
            };
        default:
            return state
    }
}