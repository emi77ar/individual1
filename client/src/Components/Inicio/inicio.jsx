import { Link } from "react-router-dom"
import style from './inicio.module.css';
export const Inicio = ()=>{
    return(
        <div className={style.contenedor} >
            <h1 className={style.titulo} >PROYECTO INDIVIDUAL: VIDEOGAMES</h1>
            <h2 className={style.titulo}>creado por: EMILIO BALCAZA</h2>
            <h3 className={style.titulo}>para: HENRY</h3>
            <h3 className={style.titulo}>año 2023</h3>
            <Link to='/videogames' >
                 <button className={style.boton}>INGRESAR</button>
             </Link>
    
        </div>
    )

}

