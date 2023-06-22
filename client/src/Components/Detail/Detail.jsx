import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css';

const Detail = ()=>{
    const {id} = useParams();
    const [game, setGame] = useState({});

    
    useEffect(()=>{
        axios.get(`http://localhost:3001/videogames/${id}`)
        .then(({data})=>{
            if(data.name){
                setGame(data)
            }else{
                return;
        }
    });

    
        return setGame({});

    },[id]);




return(
    <div className={style.contenedor} >
        <img className={style.img} src={game.background_image} />
        <ul>
            <li>{game.id}</li>
            <li>{game.name}</li>
            <li>{game.description_raw}</li>
            <li>{game.released}</li>
            <li>{game.rating}</li>
            <li>{game.genres?.map((genre)=>genre.name).join(", ")}</li>
            <li>{game.platforms?.map((platform)=>platform.platform.name).join(", ")} </li>
            
        </ul>

    </div>
)


}

export default Detail;