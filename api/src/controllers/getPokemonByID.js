const URL = 'https://pokeapi.co/api/v2/pokemon/';
const axios = require('axios');
const { Pokemon } = require('../db');

const getPokemonByID = async (req, res) => {
    let { idPokemon } = req.params;
    const { data } = await axios(`${URL}${idPokemon}`);
    idPokemon = Number(idPokemon);

    try {
        if(isNaN(idPokemon)) {
            const dbPokemon = await Pokemon.findByPk(idPokemon);
            if (dbPokemon) {
                return res.status(200).json({ result: 'success', info: dbPokemon})
            }
        }

        if (!data.name) {
            throw Error('Missing data of pokemon with ID: ' + idPokemon);
        }

        const apiPokemon = {
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

        return res.status(200).json({ result: 'succes', info: apiPokemon });
    } catch (error) {
        return error.message.includes('ID') 
            ? res.status(404).json({ message: error.message }) 
            : res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getPokemonByID
}