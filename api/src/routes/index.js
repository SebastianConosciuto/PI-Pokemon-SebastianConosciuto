const { Router } = require('express');
const { getAllPokemons } = require('../controllers/getAllPokemons');
const { getPokemonByID } = require('../controllers/getPokemonByID');
const { getPokemonByName } = require('../controllers/getPokemonByName');
const { getTypes } = require('../controllers/getTypes');
const { postPokemon } = require('../controllers/postPokemon');
const { getPokemonsByType } = require('../controllers/getPokemonsByType')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', (req, res) => {
    getAllPokemons(req, res);
});

router.get('/pokemons/:idPokemon', (req, res) => {
    getPokemonByID(req, res);
});

router.get('/pokemon', (req, res) => {
    getPokemonByName(req, res);
});

router.get('/types', (req, res) => {
    getTypes(req, res);
});

router.get('/types/:idType', (req, res) => {
    getPokemonsByType(req, res);
});

router.post('/pokemons', (req, res) => {
    postPokemon(req, res);
});

module.exports = router;
