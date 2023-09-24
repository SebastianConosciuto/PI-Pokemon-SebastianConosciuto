import axios from 'axios';
import { LOAD_POKES } from './actionsTypes'

export const loadPokes = () => {
    const endpoint = `http://localhost:3001/pokemons`

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint)

            const info = data.info

            console.log('info', info)

            if(!info.length) throw Error ("There's no pokemons")

            return dispatch({
                type: LOAD_POKES,
                payload: info,
            });
        } catch (error) {
            console.error(error.message);
        }
    };
}