import style from './NavBar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { orderCards, orderCardsRating, buscarPorName, getVideogames} from '../../Redux/actions';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

const Nav = ()=>{

    const [aux, setAux] = useState("")

    const dispatch = useDispatch();

    const handleOrder = (event)=>{
        
        dispatch(orderCards(event.target.value));
        setAux("")
    }
  const handleRating = (event)=>{
    dispatch(orderCardsRating(event.target.value))
  }
  const handleChange = (event)=>{
    setAux(event.target.value)

  }
  const handleButon = ()=>{
    dispatch(buscarPorName(aux))
  }

 

    return(
        <div className={style.contenedor}>
            <input type="text" onChange={handleChange} /><button onClick={handleButon} >BUSCAR</button>
       


    <div>
        <select onChange={handleOrder} className={style.selector}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>

        <select onChange={handleRating}>
            <option value="Mayor">Mayor Rating</option>
            <option value="Menor">Menor Rating</option>
        </select>
        
    </div>

        </div>
    )
}





/*


class Nav extends React.Component{
    constructor(props){
        super(props)
    }



render(){
    return(
        <div className={style.contenedor}>
            <input type="text"  /><label>BUSCAR</label>
            <div className={style.paginas} >
        <Link to={"/videogames/?p=1"} >
        <h1 >1</h1>
        </Link>
        <Link to={`/videogames/?page=2`} >
        <h1>2</h1>
        </Link>
        
        <Link>
        <h1>3</h1>
        </Link>
        <Link>
        <h1>4</h1>
        </Link>
        
        <Link>
        <h1>5</h1>
        </Link>
        <Link>
        <h1>6</h1>
        </Link>
       
        <Link>
        <h1>7</h1>
        </Link>
        <Link>
        <h1>8</h1>
        </Link>
    </div>


    <div>
        <select className={style.selector}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
    </div>

        </div>
    )
}

}
*/
const mapStateToProps = (state)=>{
    return{
        allVideogames: state.allVideogames
    }
}

export default connect(mapStateToProps,null)(Nav)
