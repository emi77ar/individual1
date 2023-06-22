import axios from 'axios';

export const getVideogames = (p)=>{
    return async function(dispatch){
       
        const games = await axios.get(`http://localhost:3001/videogames/?p=${p}`)
 

    const allGames = games.data;
    dispatch({type: "GET_GAMES", payload: allGames});
    }
}

export const buscarPorName = (name)=>{
    return async function(dispatch){
        const games = await axios.get(`http://localhost:3001/videogames/?name=${name}`);

    
    const gamesName = games.data;
    dispatch({type: "GET_NAME", payload: gamesName})
    }
}

export const filterCards = (gender)=>{
    return {type: "FILTER_CARDS", payload: gender}
}

export const orderCards = (opc)=>{
    return {type: "ORDER_NAME", payload: opc}
}
export const orderCardsRating = (opc)=>{
    return {type: "ORDER_RATINGS", payload: opc}
}