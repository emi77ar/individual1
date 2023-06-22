const axios = require('axios');

const gameGenres = async(req, res)=>{
   let generosDeJuegos = [];
    
    const {data} = await axios.get(`https://api.rawg.io/api/genres?key=e0da9040ec2e437588b919e3b2dfdaad`);

 
    for(let i = 0; i<data.results.length; i++){
        generosDeJuegos[i] = data.results[i].name;
    }

    console.log(generosDeJuegos);

    return generosDeJuegos;
}

module.exports = {gameGenres}