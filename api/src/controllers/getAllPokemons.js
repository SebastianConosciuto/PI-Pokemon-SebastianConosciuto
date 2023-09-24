const URL = 'https://pokeapi.co/api/v2/pokemon/'
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getAllPokemons = async (req, res) => {
    const { data } = await axios(`${URL}?limit=12`);
    let apiPokemons = data.results;

    for (let i = 0; i < apiPokemons.length; i++) {
        console.log(i)
        const { data } = await axios(apiPokemons[i].url)
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
        apiPokemons[i] = poke
    }

    const dbPokemons = await Pokemon.findAll({ include: { model: Type, attributes: ['name'], through: { attributes: [] } } })
    return res.status(200).json({ result: 'success', info: [...apiPokemons, ...dbPokemons] })       
}

module.exports = {
    getAllPokemons
}

