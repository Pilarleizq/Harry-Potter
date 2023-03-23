import gryffindor from '../images/gryffindor.png'
import ravenclaw from '../images/ravenclaw.png'
import hufflepuff from '../images/hufflepuff.png'
import slytherin from '../images/slytherin.png'
import alive from '../images/heartbeat.png';
import dead from '../images/skull.png';
import { Link } from 'react-router-dom';
import triangulo from '../images/triangulo.png'

function CharacterDetail ({characterFind}) {

const house = () => {
    if(characterFind.house === 'Gryffindor'){
        return (
            <img  className="house-photo" alt="houses logo" src={gryffindor}/>
        )
    } else if (characterFind.house === 'Ravenclaw'){
        return (
            <img  className="house-photo" alt="houses logo" src={ravenclaw}/>
        )
    } else if (characterFind.house === 'Hufflepuff'){
        return (
            <img  className="house-photo" alt="houses logo" src={hufflepuff}/>
        )
    } else {
        return (
            <img  className="house-photo" alt="houses logo" src={slytherin}/>
        )
    }

}

    return(
    <>
    <div className="button-return">
    <Link to="/house" className="return-button">
      <img src={triangulo} alt="triángulo" className="triangle"/>
      </Link>
      <p className="arrow">🡅</p>
      <p className="return">Return to characters</p>
      </div>
    <div className="card-container">
    <h2 className="card-title">{characterFind.name}</h2>
    {house()}
    <div className="detail-container">
        <img 
        className="detail-image"
        src={characterFind.image ? characterFind.image : "https://w0.peakpx.com/wallpaper/311/864/HD-wallpaper-harry-potter-books-harry-potter-thumbnail.jpg"}
        alt="Foto del personaje"
        title="Foto del personaje"
    ></img>
    <h4 className="detail-name">
        <p className="detail-year">{characterFind.yearOfBirth}</p>
    <p className="detail-especie">{characterFind.species}</p>
    
    <p className="detail-gender">{characterFind.gender}</p>
    <img className="detail-alive" alt="status" src={characterFind.alive ? alive : dead}></img>
    

    </h4>
    </div>
    </div>
    </>
    )
}

export default CharacterDetail;