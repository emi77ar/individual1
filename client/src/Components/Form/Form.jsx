import { useState } from "react";
import style from './Form.module.css';
import validations from "./validations.js";

const Form = ()=>{

const [form, setForm] = useState({
        Nombre:"",
        Imagen:"",
        Descripcion:"",
        Lanzamiento:"",
        Rating:"",

    })

const [errors, setErrors] = useState({
        Nombre:"",
        Imagen:"",
        Descripcion:"",
        Lanzamiento:"",
        Rating:"",
})



const changeHandler = (event)=>{
    const property = event.target.name;
    const value = event.target.value;

    setErrors(validations({...form, [property]:value}))
    setForm({...form, [property]:value})
}


/*
const validate = (form)=>{
    //valido el NOMBRE
    if(/^[a-zA-Z0-9\s\-]{1,100}$/.test(form.Nombre)){
        setErrors({...errors, Nombre:""})
    }else{
        setErrors({...errors, Nombre:"El nombre es invalido"})
    }
    if(form.Nombre === "") setErrors({...errors, Nombre:""})

    //VALIDO LA IMAGEN
    
    if(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(form.Imagen)){
        setErrors({...errors, Imagen:""})
    }else{
        setErrors({...errors, Imagen:"Debe ser una url valida"})
    }
    if(form.Imagen === "") setErrors({...errors, Imagen:""});



}
*/


return(
    
    <form action="">
        
        <div className={style.principal} >
        <h1>CREA TU VIDEOJUEGO</h1>
        <div className={style.secundario}>
            <label>Nombre:</label>
            <input type="text" value={form.Nombre} onChange={changeHandler} name="Nombre" />
             <span>{errors.n2}</span> 
        </div>

        <div className={style.secundario}>
            <label>Imagen:</label>
            <input type="text" value={form.Imagen} onChange={changeHandler} name="Imagen"/>
        </div>

        <div className={style.secundario}>
            <label>Descripcion:</label>
            <textarea name="Descripcion" id="" cols="30" rows="10" value={form.Descripcion} onChange={changeHandler} ></textarea>

        </div>

        <div className={style.secundario}>
        <label>Fecha de lanzamiento:</label>
        <input type="text" value={form.Lanzamiento} onChange={changeHandler} name="Lanzamiento" />
    
        </div>    
        
        <div className={style.secundario}>
        <label>Rating:</label>
            <input type="text" value={form.Rating} onChange={changeHandler} name="Rating" />

        </div>

        </div>
            
    </form>
    )
}

export default Form;