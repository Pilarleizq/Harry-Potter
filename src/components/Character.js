function Character () {

    return(
        <li className="li-element">
            <a href=".">
                <img className="img" 
                src="https://ik.imagekit.io/hpapi/harry.jpg"
                alt="foto del personaje"
                title="foto del personaje"
                ></img>
                <h4 className="name-character"> Nombre </h4>
                <p className="especie">Especie</p>
            </a>
        </li>
    );

}

export default Character;