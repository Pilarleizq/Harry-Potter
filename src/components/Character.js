import { Link } from "react-router-dom";

function Character ({Character}) {

    return(
        <li className="li-element">
            <Link to={`/character/${Character.id}`} className="characters" >
                <img className="img" 
                src={Character.image ? Character.image : "https://w0.peakpx.com/wallpaper/311/864/HD-wallpaper-harry-potter-books-harry-potter-thumbnail.jpg"}
                alt="foto del personaje"
                title="foto del personaje"
                ></img>
                <h4 className="name-character"> {Character.name} </h4>
                <p className="especie">{Character.species}</p>
                <p className="gender">{Character.gender}</p>
            </Link>
        </li>
    );

}

export default Character;