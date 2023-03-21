/* SECCIÓN DE IMPORT */
//Estilos
import '../styles/App.scss';
//React
import { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
//Míos
import getDataApi from '../services/api';
import listCharacter from './listCharacter';
import Character from './Character';


function App() {

  const [list, setList] = useState([]);


  useEffect(() => {
    getDataApi()
    .then((data) => {
      setList(data);
    });
  }, []);

  
  
  return ( 
  <div className="App">
    <header className="header">
    <h1 className="title">Harry Potter</h1>
    <form className="form">
      <label htmlFor="filter">
        Busca el personaje:
        <input 
        className="filter-character" 
        autocomplete="off"
        type="search"
        id="filter"
        name="filter"
        placeholder="Nombre del personaje"
        />
      </label>
      <label htmlFor="house">
        Elige la casa:
      <select className="filter-house" id="house" name="house">
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </label>
    </form>
  </header>
  <main>
  <listCharacter list={list}/>
  </main>
  </div>
);
}


export default App;
