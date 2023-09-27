const URL = 'https://pokeapi.co/api/v2/type'
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokemonsByType = async (req, res) => {

    let { idType } = req.params;
    if (!idType) return res.status(400).json({ error: 'Missing "type" property' })
    // ?limit=12&offset=xx&typeId=id
    try {
        let offset = Number(req.query?.offset)
        let limit = Number(req.query?.limit)
        let origin = Number(req.query?.origin)
        let order = Number(req.query?.order)
    
        if (!offset) offset = 0
        if (!limit) limit = 12
        if (!origin) origin = 0
        if (!order) order = 0
    
        const { data } = await axios(`${URL}/${idType}`);
    
        let apiPokemons = []
        
        if (origin != 1) {
            apiPokemons = data.pokemon;
    
            for (let i = 0; i < apiPokemons.length; i++) {
                const { data } = await axios(apiPokemons[i].pokemon.url)
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
        }
    
        let dbPokemons = []
        
        if (origin != 2) dbPokemons = await Pokemon.findAll({ include: { model: Type, attributes: ['name'], where: { id: idType }, through: { attributes: [] } } })

        // extraigo la info que necesito y le configuro los types para estandarizar la respuesta de la base de datos

        dbPokemons = dbPokemons.map((pokemon) => {
            return ({
              ...pokemon.dataValues,
              types: pokemon.types.map((type) => type.name)
            })
          })
    
        const completeList = [...apiPokemons, ...dbPokemons]

        switch (order) {
            case 1:
                // A-Z
                completeList.sort((a, b) => {
                  const nameA = a.name.toLowerCase();
                  const nameB = b.name.toLowerCase();
                  if (nameA < nameB) return -1;
                  if (nameA > nameB) return 1;
                  return 0;
                });
                break;
            case 2:
                // Z-A
                completeList.sort((a, b) => {
                  const nameA = a.name.toLowerCase();
                  const nameB = b.name.toLowerCase();
                  if (nameA > nameB) return -1; // Reverse the comparison
                  if (nameA < nameB) return 1;  // Reverse the comparison
                  return 0;
                })
                break;
            case 3:
                // Ataque asc
                completeList.sort((a, b) => a.attack - b.attack);
                break;
            case 4:
                // Ataque des
                completeList.sort((a, b) => b.attack - a.attack);
                break;
            default:
                break;
        }
    
        const limitedList = completeList.slice(offset, limit + offset)
    
        return res.status(200).json({ result: 'success', info: limitedList, nextPage: offset + limit, prevPage: offset - limit }) 
    } catch {
        return res.status(500).json({ error: 'Failed to get pokemons' })
    }   
}

module.exports = {
    getPokemonsByType
}
