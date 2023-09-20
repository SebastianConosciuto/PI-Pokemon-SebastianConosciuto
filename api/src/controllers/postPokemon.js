const { Pokemon, Type } = require('../db');

const postPokemon = async (req, res) => {
    const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;

    if (!name || !image || !hp || !attack || !defense || !speed || !height || !weight || !types) {
        return res.status(400).json({ error: 'Missing data of the pokemon'});
    }

    try {
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

        const dbTypes = await Type.findAll({
            where: {
                name: types,
            },
        })

        await newPokemon.setTypes(dbTypes)

        return res.status(201).json(nuevoPokemon);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create new Pokemon' })
    }
}

module.exports = {
    postPokemon
}