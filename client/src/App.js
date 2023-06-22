import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Inicio } from './Components/Inicio/inicio';
import Cards from './Components/Cards/Cards';
import { useLocation } from 'react-router-dom';
import Nav from './Components/NavBar/NavBar';
import Detail from './Components/Detail/Detail';
import axios from 'axios';
import { getVideogames, orderCards } from './Redux/actions';
import Form from './Components/Form/Form';

function App() {


  const location = useLocation();
  const showNav = location.pathname !== '/';
 

  return (
    <div className="App">



   {showNav && <Nav/>}
    <Routes>
      <Route exact path='/' element={<Inicio/>} />
      <Route path='/videogames/' element={<Cards/>} />
      <Route path='/videogames/:id' element={<Detail/>}/>
      <Route path='/videogames/form' element={<Form/>} />
    </Routes>



    </div>
  );
}

export default App;
