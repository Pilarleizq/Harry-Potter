function Character ({Character}) {

    return(
        <li className="li-element">
            <a className="characters" href=".">
                <img className="img" 
                src={Character.image ? Character.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Harry_Potter_Book_and_Wand.jpg/800px-Harry_Potter_Book_and_Wand.jpg"}
                alt="foto del personaje"
                title="foto del personaje"
                ></img>
                <h4 className="name-character"> {Character.name} </h4>
                <p className="especie">{Character.species}</p>
            </a>
        </li>
    );

}

export default Character;