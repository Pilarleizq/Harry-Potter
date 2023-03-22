/* SECCIÓN DE IMPORT */
//Estilos e imágenes
import '../styles/App.scss';
import '../styles/Details.scss';
import headerlogo from '../images/header.png';

//React
import { useEffect, useState } from 'react';
import { Link, matchPath, Route, Routes, useLocation } from 'react-router-dom';

//Míos
import getDataApi from '../services/api';
import ListCharacter from './ListCharacter';
import Filter from './Filter';
import CharacterDetail from './CharacterDetail';
import Landing from './Landing';





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


const { pathname } = useLocation();

const dataUrl = matchPath("/character/:id", pathname);

const characterId = dataUrl !== null? dataUrl.params.id : null

const characterFind = list
    .find((Character) => Character.id === characterId)

  return ( 
  <div className="App">
    <header className="header">
    <img className='image-header' src={headerlogo} alt="dibujo"/>

   
    </header>
    <Routes>
      <Route 
      path="/"
      element={
        <Landing></Landing>
      }
      ></Route>
      <Route path="*" element={
        <p className="not-found">This page is not found!! ⚠</p>
      }></Route>
      <Route 
      path="/house" 
      element={
      <>
       <Filter 
      selectedHouseLift={selectedHouseLift} 
      handlerFilter={handlerFilter} 
      filterName={filterName}/>

      <ListCharacter list={renderList()}/>
</>
}
      ></Route>
      <Route 
      path="/character/:id" 
      element={<CharacterDetail characterFind={characterFind}/>}/>
    </Routes>  
      
  </div>
);
}


export default App;
