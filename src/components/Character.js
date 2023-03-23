import { Link } from "react-router-dom";
import hat from '../images/harry-potter.png';

function Character ({Character}) {

    return(
        <>
        
        <li className="li-element">
        <img src={hat} alt="gorro" className="gorro"></img>
            <Link to={`/character/${Character.id}`} className="characters" >
                <img className="img" 
                src={Character.image ? Character.image : "https://w0.peakpx.com/wallpaper/311/864/HD-wallpaper-harry-potter-books-harry-potter-thumbnail.jpg"}
                alt="foto del personaje"
                title="foto del personaje"
                ></img>
                <h4 className="name-character"> {Character.name} </h4>
                <h5 className="name-actor">{Character.actor}</h5>
                <p className="especie">{Character.species}</p>
                <p className="gender">{Character.gender}</p>
            </Link>
        </li>
        </>
    );

}

export default Character;