const URL = 'https://pokeapi.co/api/v2/pokemon/'
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getAllPokemons = async (req, res) => {
    try {
        let offset = Number(req.query?.offset)
        let offsetDatabase = Number(req.query?.offsetDatabase)
        let limit = Number(req.query?.limit)
        let origin = Number(req.query?.origin)
    
        if (!offset) offset = 0
        if (!limit) limit = 12
        if (!origin) origin = 0 // ambos origenes
        if (!offsetDatabase) offsetDatabase = false
    
        let apiPokemons = []
        let dbPokemons = []
        console.log('0')
        if (!offsetDatabase && origin != 1){
            console.log('1')
            const { data } = await axios(`${URL}?limit=${limit}&offset=${offset}`);
            
            apiPokemons = data.results

            for (let i = 0; i < apiPokemons.length; i++) {
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
            console.log('2')
        }
        
        if (origin != 2) {
            console.log('3')
            dbPokemons = await Pokemon.findAll({ include: { model: Type, through: 'pokemon_type' } })
        }
        
        console.log('4')
        if (apiPokemons.length < limit && offsetDatabase == false && dbPokemons.length > 0) {
            console.log('5')
            dbPokemons = dbPokemons.slice(0, limit - apiPokemons.length)
            offset = dbPokemons.indexOf(dbPokemons[-1])
            offsetDatabase = true
            apiPokemons = [...apiPokemons, ...dbPokemons]
        } else if (offsetDatabase == true) {
            console.log('6')
            apiPokemons = [...dbPokemons.slice(offset, offset + limit)]
        }

        console.log(apiPokemons)
        return res.status(200).json({ result: 'success', info: apiPokemons, nextPage: offset + limit, prevPage: offset - limit, offsetDatabase })
    } catch {
        return res.status(500).json({ result: 'failed', error: 'Internal Server Error' })
    }    
}

module.exports = {
    getAllPokemons
}

