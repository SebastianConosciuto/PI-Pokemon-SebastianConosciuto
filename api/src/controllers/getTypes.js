const axios = require('axios');
const { Type } = require('../db');
const URL = 'https://pokeapi.co/api/v2/type';

const getTypes = async (req, res) => {
    try {
        const dbTypes = await Type.findAll();

        if (dbTypes.length === 0) {
            const response = await axios(`${URL}`);
            const apiTypes = response.data.results;

            const apiTypesWithId = apiTypes.map(type => {
                const id = type.url.split("/")[6];

                return ({
                    id,
                    name: type.name
                })
            })

            await Type.bulkCreate(apiTypesWithId);

            return res.status(200).json({ result: 'success', info: apiTypesWithId});
        }

        return res.status(200).json({ result: 'success', info: dbTypes });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get pokemon types'});
    }
}

module.exports = {
    getTypes
}