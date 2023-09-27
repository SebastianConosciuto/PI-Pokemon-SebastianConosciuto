const URL = 'https://pokeapi.co/api/v2/pokemon/';
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokemonByName = async (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: 'Must provide the name of a Pokemon'});
    }
    const lowerCaseName = name.toLowerCase();

    try {
        try {
            const { data } = await axios(`${URL}${lowerCaseName}`);

            let apiPokemon = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                hp: data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
                attack: data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
                defense: data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
                speed: data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
                height: data.height,
                weight: data.weight,
                types: data.types.map((type) => type.type.name),
            };
        
            return res.status(200).json({ result: 'success', info: apiPokemon })    


        } catch (error) {
            const dbPokemon = await Pokemon.findOne({ where: { name: name }, include: { model: Type, attributes: ['name'], through: { attributes: [] } } })
            return res.status(200).json({ result: 'success', info: dbPokemon });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getPokemonByName
}