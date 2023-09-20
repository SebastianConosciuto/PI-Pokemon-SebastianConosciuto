const URL = 'https://pokeapi.co/api/v2/pokemon/'
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getAllPokemons = async (req, res) => {
    // esta función obtiene todos los pokemons y los devuelve como array
    try {
        // config axios
        const { data } = await axios(`${URL}`);
        // declarar variables
        const apiPokemons = data.results;
        const detailedPokemons = [];
        // extraer los detalles de cada pokemon existente
        await Promise.all(allPokemons.map(async (pokemon) => {
            const response = await axios.get(pokemon.url);
            const data = response.data;

            const poke = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                hp: data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
                attack: data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
                defense: data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
                speed: data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
                height: data.height,
                weight: data.weight,
                types: data.types.map((type) => type.type.name)
            };

            detailedPokemons.push(poke)
        }))
        // obtener pokemons de la base de datos
        const dbPokemons = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: { attributes: [] }
            }
        })
        // juntar los pokemons de la api y de la base de datos
        const allPokemons = [...detailedPokemons, ...dbPokemons];

        // return array 2xx
        return res.status(200).json({ result: 'success', info: allPokemons });
    } catch (error) {
        // catch error 5xx
        return res.status(500).json({ message: error.message });
    }
    
}


