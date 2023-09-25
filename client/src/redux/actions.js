import axios from 'axios';
import { LOAD_POKES, LOAD_ONE_POKE } from './actionsTypes'

export const loadPokes = (offset) => {
    const endpoint = `http://localhost:3001/pokemons`

    return async (dispatch) => {
        try {

            //todo: hacer una carga local para no pegarle a la api cada vez que traigo el mismo offset

            const { data } = await axios.get(endpoint, { params: { offset } })

            data.offset = offset

            // atajar errores

            console.log(data)

            return dispatch({
                type: LOAD_POKES,
                payload: data,
            });
        } catch (error) {
            console.error(error.message);
        }
    };
}

export const loadOnePoke = (name) => {
    const endpoint = `http://localhost:3001/pokemon`

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint, { params: { name }})

            // atajar errores

            console.log(data)

            return dispatch({
                type: LOAD_ONE_POKE,
                payload: data.info,
            });
        } catch (error) {
            console.error(error.message);
        }
    };
}