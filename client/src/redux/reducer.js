import { LOAD_POKES } from "./actionsTypes"

const initialState = {
    pokemons: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch ( type ) {
        case LOAD_POKES:
            return {
                ...state,
                pokemons: payload
            }
        default:
            return { ...state }
    }
}

export default reducer
