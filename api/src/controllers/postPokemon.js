const { Pokemon, Type } = require('../db');

const postPokemon = async (req, res) => {
    try {
        const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;

        if (!name || !image || !hp || !attack || !defense || !speed || !height || !weight || !types?.length) {
            return res.status(400).json({ error: 'Missing data of the pokemon'});
        }   
        
        const newPokemon = await Pokemon.create({
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
        })

        console.log(newPokemon)

        const dbTypes = types.map( async (type) => {
            const [foundType] = await Type.findOrCreate({
                where: { name: type },
                default: { name: type }
            })
            return foundType.id;
        })

        const foundTypes = await Promise.all(dbTypes)

        console.log(foundTypes)

        await newPokemon.addTypes(foundTypes)

        return res.status(201).json(newPokemon);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Failed to create new Pokemon' })
    }
}

module.exports = {
    postPokemon
}