const {gameGenres} = require('../controllers/02-genres')

const genresHandler = async (req, res)=>{

    try {
        const genresGames = await gameGenres();
        res.status(200).send(genresGames)
    } catch (error) {
        res.status(400).send(error.message);
        
    }
};

module.exports = {genresHandler}

