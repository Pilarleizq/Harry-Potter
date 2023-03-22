/* SECCIÓN DE IMPORT */
//Estilos e imágenes
import '../styles/App.scss';
import headerLogo from '../images/header.png';
//React
import { useEffect, useState } from 'react';

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
    <header headerLogo={headerLogo} className="header">
    <Filter selectedHouseLift={selectedHouseLift} ></Filter>
  </header>
  <main>
  <ListCharacter list={list}/>
  </main>
  </div>
);
}


export default App;
