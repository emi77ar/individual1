const { Router } = require('express');
const {getVideogameByIdHandler, videogamesHandler, createVideogamesHandler} = require('../handlers/videogamesHandlers');
const {genresHandler} = require('../handlers/genresHandler')
/*
const express = require('express');
const routes = express.Router();*/
//const routes = require('express').Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routes = Router();

//const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

routes.get("/videogamesGenres", genresHandler);
routes.get('/videogames/',videogamesHandler);
routes.get('/videogames/:id', getVideogameByIdHandler);
routes.post('/videogames', createVideogamesHandler)



module.exports = routes;
