import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({background_image,id,name,genres})=>{

    return(
        <div className={style.contenedor}>

            <img className={style.image} src={background_image} />
            <Link to={`/videogames/${id}`}  >
            <h2>{name}</h2>
            </Link>
            <h2 className={style.genres} >{genres}</h2>
            </div>
    )

}

export default Card;