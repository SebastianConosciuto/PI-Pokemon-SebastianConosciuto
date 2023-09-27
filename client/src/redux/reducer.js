import { LOAD_POKES, LOAD_ONE_POKE, CLEAN_POKEMON, LOAD_TYPES, SET_TYPE, CLEAN_OFFSET, SET_ORIGIN, SET_ORDER, LOADING_POKES } from "./actionsTypes"

const initialState = {
    pokemons: [],
    prevPage: null,
    nextPage: 12,
    offset: 0,
    offsetDatabase: false,
    detailPokemon: {},
    types: [],
    typeSelected: 0, // id all = 0
    origin: 0, // id all = 0
    order: 0, // id all = 0
    loadingPokes: false
}

const reducer = (state = initialState, { type, payload }) => {
    switch ( type ) {
        case LOAD_POKES:
            return {
                ...state,
                pokemons: payload.info,
                nextPage: payload.nextPage,
                prevPage: payload.prevPage,
                offset: payload.offset,
                offsetDatabase: payload.offsetDatabase
            }
        
        case LOAD_ONE_POKE:
            return {
                ...state,
                detailPokemon: payload
            }
        
        case CLEAN_POKEMON:
            return {
                ...state,
                detailPokemon: payload
            }

        case LOAD_TYPES:
            return {
                ...state,
                types: payload
            }

        case SET_TYPE:
            return {
                ...state,
                typeSelected: payload
            }

        case SET_ORIGIN:
            return {
                ...state,
                origin: payload
            }

        case SET_ORDER:
            return {
                ...state,
                order: payload
            }
    
        case CLEAN_OFFSET:
            return {
                ...state,
                ...payload
            }

        case LOADING_POKES:
            return {
                ...state,
                loadingPokes: payload
            }

        default:
            return state
    }
}

export default reducer;
