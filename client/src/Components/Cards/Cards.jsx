import style from './Cards.module.css'
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../../Redux/actions';

export default function Cards(){

    const [aux, setAux] = useState("0")

const handleCards = (event)=>{
    
     setAux(event.target.value)
 }
    


 const dispatch = useDispatch();

 useEffect(()=>{
   dispatch(getVideogames(aux))
   
 },[aux])

    
 let allVideogames = useSelector(state=>state.allVideogames)
 /*

    if(aux === '1'){
    
        allVideogames = allVideogames.slice(0,15)
    }
   
    if(aux === '2'){
        allVideogames = allVideogames.slice(15,30)
    }
    if(aux === '3'){
        allVideogames = allVideogames.slice(30,45);
    }
    if(aux === '4'){
        allVideogames = allVideogames.slice(45,60);
    }
    if(aux === '5'){
        allVideogames = allVideogames.slice(60,75);
    }
    if(aux === '6'){
        allVideogames = allVideogames.slice(75,90);
    }
    if(aux === '7'){
        allVideogames = allVideogames.slice(90,105);
    }
    if(aux === '8'){
        allVideogames = allVideogames.slice(105,120)
    }
  */


    
    return(
        <div>

        <div className={style.paginas} >
       
        <label className={style.label} >PAGINA </label><select onChange={handleCards}>
            
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">6</option>
            <option value="6">7</option>
            
  
        </select>
        </div>

        <div className={style.contenedorCards} >
        {allVideogames.map((game)=>{
            return(
                <Card 
                    id={game.id}
                    background_image={game.background_image}
                    name={game.name}
                    genres={game.genres?.map((genre)=>genre.name).join(", ")}


                />

            )
        })}
        </div>
        
       
         
        </div>
        
    )
}