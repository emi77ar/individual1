import { axios } from "axios"

const initialState = {
    allVideogames: [],

}



const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "GET_GAMES":
            return {
                ...state,
                allVideogames: action.payload
            }

        case "GET_NAME":
            return{
                
                allVideogames: action.payload
            }


        case "ORDER_NAME":
            const allVideogamesCopy = [...state.allVideogames]
            
            return{
              ...state,
              allVideogames:
              action.payload === "A"
              ? allVideogamesCopy.sort((a,b)=> a.name.localeCompare(b.name))
              : allVideogamesCopy.sort((a,b)=> b.name.localeCompare(a.name))

            }

            case "ORDER_RATINGS":
                const allVideogamesRatings = [...state.allVideogames]
                return{
                    ...state,
                    allVideogames:
                    action.payload === "Mayor"
                    ? allVideogamesRatings.sort((a,b)=> a.rating - b.rating)
                    : allVideogamesRatings.sort((a,b)=> b.rating - a.rating)
                    
                }
        


        default: return {...state}
    }
}

export default reducer;