/* SECCIÓN DE IMPORT */
//Estilos e imágenes
import '../styles/App.scss';
import '../styles/Details.scss';
import headerlogo from '../images/header.png';
import footerlogo from '../images/footer.png';

//React
import { useEffect, useState } from 'react';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';

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
  const [filterActor, setFilterActor] = useState('');
  
 const selectedHouseLift = (value) => {
  setHouses(value)
 }

 const handlerFilter = (value) => {
  setFilterName(value);
}

const handlerActor = (value) => {
  setFilterActor(value);
}

const renderList = 
list
 
  .filter((Character) => {
    return Character.name.toLowerCase().includes(filterName.toLowerCase());
  })
  .filter((Character) => {
  return Character.actor.toLowerCase().includes(filterActor.toLowerCase());
})


  useEffect(() => {
    getDataApi(houses)
    .then((data) => {
      setList(data);
    });
  }, [houses]);

  list.sort((a,b) => a.name.localeCompare(b.name))

const { pathname } = useLocation();

const dataUrl = matchPath("/character/:id", pathname);

const characterId = dataUrl !== null? dataUrl.params.id : null

const characterFind = list
    .find((Character) => Character.id === characterId)

const resetButton = (ev) => {
  setHouses('gryffindor');
  setFilterName('');
  setFilterActor('');
}

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
        <section className='section'>
       <p className="not-found">This page is not found!! ⚠</p>
       </section>
      }></Route>
      <Route 
      path="/house" 
      element={
      <>
      <Filter 
      houses={houses}
      selectedHouseLift={selectedHouseLift} 
      handlerFilter={handlerFilter}
      handlerActor={handlerActor} 
      filterName={filterName}
      filterActor={filterActor}
      resetButton={resetButton}/>
      <ListCharacter list={renderList}/>
      </>
      }
      ></Route>
      <Route 
      path="/character/:id" 
      element={<CharacterDetail characterFind={characterFind}/>}/>
      </Routes>  
    
    
    <footer className="footer">
      <small className="copy">Harry Potter &copy;2023</small>
    <img src={footerlogo} 
      alt="logo-footer" 
      className="logo-footer"
      title="Houses logo"
    />
    </footer>
  </div>
);
}


export default App;
