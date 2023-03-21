/* SECCIÓN DE IMPORT */
//Estilos
import '../styles/App.scss';
//React
import { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
//Míos
import getDataApi from '../services/api';
import ListCharacter from './ListCharacter';
import Filter from './Filter';


function App() {

  const [list, setList] = useState([]);
  const [houses, setHouses] = useState('gryffindor');

 const selectedHouseLift = (value) => {
  setHouses(value)
 }

  useEffect(() => {
    getDataApi(houses)
    .then((data) => {
      setList(data);
    });
  }, [houses]);



  
  
  return ( 
  <div className="App">
    <header className="header">
    <h1 className="title">Harry Potter</h1>
    <Filter selectedHouseLift={selectedHouseLift} ></Filter>
  </header>
  <main>
  <ListCharacter list={list}/>
  </main>
  </div>
);
}


export default App;
