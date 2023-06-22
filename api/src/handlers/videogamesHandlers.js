const {createGame, getVideogameById, getVideogamesName, allVideogames} = require('../controllers/01-videogames')



const videogamesHandler = async (req, res)=>{
    const { name,p } = req.query;


    try {
    if(name){
        name.toLowerCase();
        const games = await getVideogamesName(name);
        res.status(200).send(games);

    }else {
    

        const games = await allVideogames(p);


        res.status(200).send(games)
  
    }
    
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//busco por id handler

const getVideogameByIdHandler = async (req, res)=>{
    const { id } = req.params;
    //con el source estoy fijandome a donde tengo que ir a busacr la info, si a la api o la bdd

    const source = isNaN(id) ? "bdd" : "api";

    try {
        const game = await getVideogameById(id, source);
        res.status(200).json(game)
    } catch (error) {
        res.status(400).json({error: error.message})        
    }
    
}

//creo un juego handler

const createVideogamesHandler = async(req,res)=>{
    const { Nombre, Descripcion, Plataformas, Imagen, FechaDeLanzamiento, Rating } = req.body;
    try {

    const newGame = await createGame(Nombre, Descripcion, Plataformas, Imagen, FechaDeLanzamiento, Rating);
    res.status(200).json(newGame);
} catch (error) {
    res.status(400).json({error: error.message})    
}
}

module.exports = {
    createVideogamesHandler,
    videogamesHandler,
    getVideogameByIdHandler
}