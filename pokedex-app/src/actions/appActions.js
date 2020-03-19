import axios from 'axios';

export const GET_POKEMON = 'GET_POKEMON';
export const LOAD_POKEMON = 'LOAD_POKEMON';
export const SET_ERROR = 'SET_ERROR';

export const loadPokemon = () => dispatch => {
    dispatch({ type: GET_POKEMON });
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
        console.log('axios res: ', res.data.results);
        dispatch({ type: LOAD_POKEMON, payload: res.data.results })
        res.data.results.map(item => {
            axios.get(item.url)
            .then(res => {
                console.log('second axios res: ', res.data);
            })
        })
    })
    .catch(err => {
        console.log('error: ', err )
        dispatch({type: SET_ERROR, payload: "An error from the API"});
    });

};
