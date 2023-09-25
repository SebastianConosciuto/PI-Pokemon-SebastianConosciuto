import { LOAD_POKES, LOAD_ONE_POKE } from "./actionsTypes"

const initialState = {
    pokemons: [],
    prevPage: null,
    nextPage: 12,
    offset: 0
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
                pokemons: payload
            }
        default:
            return state
    }
}

export default reducer;
