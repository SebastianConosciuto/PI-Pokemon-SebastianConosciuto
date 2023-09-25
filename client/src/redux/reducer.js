import { LOAD_POKES, LOAD_ONE_POKE, CLEAN_POKEMON } from "./actionsTypes"

const initialState = {
    pokemons: [],
    prevPage: null,
    nextPage: 12,
    offset: 0,
    detailPokemon: {}
}

const reducer = (state = initialState, { type, payload }) => {
    switch ( type ) {
        case LOAD_POKES:
            return {
                ...state,
                pokemons: payload.info,
                nextPage: payload.nextPage,
                prevPage: payload.prevPage,
                offset: payload.offset
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
        
        default:
            return state
    }
}

export default reducer;
