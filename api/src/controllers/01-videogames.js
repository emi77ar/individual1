const axios = require('axios')
const { Videogames } = require('../db')

const URL = "https://api.rawg.io/api/games?key=e0da9040ec2e437588b919e3b2dfdaad"


function subdividirArray(array, elementosPorSubarray) {
    const subarrays = [];
    for (let i = 0; i < array.length; i += elementosPorSubarray) {
      const subarray = array.slice(i, i + elementosPorSubarray);
      subarrays.push(subarray);
    }
    return subarrays;
  }


const allVideogames = async(p)=>{
    //buscar en la bdd
    const databaseGames = await Videogames.findAll();

    //busco en la api    
   
    let misJuegos = [];
    for(let i = 1; i<=5; i++){
    const {data} = await axios.get(`${URL}&page=${i}`);
    misJuegos = [...misJuegos, ...data.results]
    }
    
    misJuegos = [...misJuegos, ...databaseGames];
    if(p){
        const subarrays = subdividirArray(misJuegos,15);
        
        console.log(subarrays.length)
        return subarrays[p];
    }

    

    
    
    return misJuegos;

}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//BUSCO VIDEOJUEGOS POR SU NOMBRE
const getVideogamesName = async (name)=>{
    //BUSCO EN LA BASE DE DATOS
   // const databaseVideogames = await Videogames.findAll({where: {nombre: name}})

    let misJuegos = [];

    const {data} =  (await axios.get(`https://api.rawg.io/api/games?search={game}&search=${name}&key=e0da9040ec2e437588b919e3b2dfdaad`))
    for(let i = 0; i<15; i++){
        misJuegos[i] = data.results[i];
    }
    //misJuegos = [...misJuegos, ...databaseVideogames]
    return misJuegos;

}


////////////////////////////////////////////////////////////////////////////////////////////////
//busco por id en la api y en la bd


const getVideogameById = async (id, source)=>{
    const {data} = source === "api" ?
    await axios.get(`https://api.rawg.io/api/games/${id}?key=e0da9040ec2e437588b919e3b2dfdaad`)
    : await Videogames.findByPk(id);

    
    
    return data;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////



const createGame = async (Nombre, Descripcion, Plataformas, Imagen, FechaDeLanzamiento, Rating)=> {

return await Videogames.create({Nombre, Descripcion, Plataformas, Imagen, FechaDeLanzamiento, Rating});

}








module.exports = {
    allVideogames,
    //videogamesId,
    getVideogameById,
    getVideogamesName,
    createGame
    
}


/* /*
const videogamesId = async(req, res)=>{
    try {
        const {idVideogames} = req.params;
        const {data} = await axios.get(`https://api.rawg.io/api/games/${idVideogames}?key=e0da9040ec2e437588b919e3b2dfdaad`);

        
        return res.status(200).send(data)

    } catch (error) {
        res.status(500).send(error.message)
    }

}


busco por id solo en la api
const videogameName = async (req,res)=>{
    let misJuegos = [];
    try {
        
    const { name} = req.query;
           
            name.toLowerCase();
            const {data}= (await axios.get(`https://api.rawg.io/api/games?search={game}&search=${name}&key=e0da9040ec2e437588b919e3b2dfdaad`))
       

            for(let i = 0; i<15; i++){
                misJuegos[i] = data.results[i];
            }
       

            return res.status(200).send(misJuegos)


    } catch (error) {
        res.status(500).send(error.message)
    }
}
*/

