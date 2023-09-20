const URL = 'https://pokeapi.co/api/v2/pokemon/';
const axios = require('axios');
const { Pokemon } = require('../db');
const { Op } = require('sequelize');

const getPokemonByName = async (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: 'Must provide the name of a Pokemon'});
    }

    try {
        const dbPokemon = await Pokemon.findAll()
        let pokemonName;
        for (let i = 0; i < dbPokemon; i++) {
            pokemonName = dbPokemon[i].name.toLowerCase();
            if (pokemonName === name) {
                res.status(200).json({ result: 'success', info: foundPokemon[i] });
                return;
            }
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

    try {
        const { data } = await axios(`${URL}${name.toLowerCase()}`);

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
            types: data.types.map((type) => type.type.name),
        };
        
        return res.status(200).json({ result: 'succes', info: apiPokemon})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getPokemonByName
}