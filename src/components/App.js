/* SECCIÓN DE IMPORT */
//Estilos e imágenes
import '../styles/App.scss';
import headerlogo from '../images/header.png';
import triangulo from '../images/triangulo.png'
//React
import { useEffect, useState } from 'react';

//Míos
import getDataApi from '../services/api';
import ListCharacter from './ListCharacter';
import Filter from './Filter';



function App() {

  const [list, setList] = useState([]);
  const [houses, setHouses] = useState('gryffindor');
  const [filterName, setFilterName] = useState('');


 const selectedHouseLift = (value) => {
  setHouses(value)
 }

 const handlerFilter = (value) => {
  setFilterName(value);
}

const renderList = () => {
  return list
  .filter((Character) => {
    return Character.name.toLowerCase().includes(filterName.toLowerCase());
  })
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
    <img className='image-header' src={headerlogo} alt="dibujo"/>
      
      <img src={triangulo} alt="triángulo"/>
       
      
    <Filter 
    
    selectedHouseLift={selectedHouseLift} 
    handlerFilter={handlerFilter} 
    filterName={filterName}></Filter>
  </header>
  <main>
  <ListCharacter list={renderList()}/>
  </main>
  </div>
);
}


export default App;
