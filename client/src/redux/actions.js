import axios from 'axios';
import { LOAD_POKES, LOAD_ONE_POKE, CLEAN_POKEMON, LOAD_TYPES, SET_TYPE, SET_ORIGIN, SET_ORDER, CLEAN_OFFSET } from './actionsTypes'

export const loadPokes = (offset, offsetDatabase, typeSelected, origin, order) => {
    const endpoint = `http://localhost:3001/pokemons`
    const endpointTypes = `http://localhost:3001/types/${typeSelected}`

    return async (dispatch) => {
        try {

            let data = {}

            if (Number(typeSelected) === 0) {
                const raw = await axios.get(endpoint, { params: { offset, offsetDatabase, origin } })
                data = raw.data
            } else {
                const raw = await axios.get(endpointTypes, { params: { offset, offsetDatabase, origin, order } })
                data = raw.data
            }

            data.offset = offset

            // atajar errores

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

            return dispatch({
                type: LOAD_ONE_POKE,
                payload: data.info,
            });
        } catch (error) {
            console.error(error.message);
        }
    };
}

export const cleanPokemon = () => {
    return { type: CLEAN_POKEMON, payload: {} }
}

export const loadTypes = () => {
    const endpoint = `http://localhost:3001/types`

    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint)

            return dispatch({
                type: LOAD_TYPES,
                payload: data.info,
            })
        } catch (error) {
            console.error(error.message);
        }
    }
}

export const setType = (type) => {
    return { type: SET_TYPE, payload: type }
}

export const setOrigin = (origin) => {
    return { type: SET_ORIGIN, payload: origin }
}

export const setOrder = (order) => {
    return { type: SET_ORDER, payload: order }
}

export const cleanOffset = () => {
    return { type: CLEAN_OFFSET, payload: { offset: 0, prevPage: null, nextPage: 12, offsetDatabase: false } }
}