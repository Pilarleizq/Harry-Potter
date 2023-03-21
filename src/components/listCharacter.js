 import Character from "./Character";

function ListCharacter ({list}) {
    const dataHtml = list.map(eachCharacter => {
        return <Character key={eachCharacter.id} Character={eachCharacter}/>
    })
return (
    
        <ul className="list">
            {dataHtml}
        </ul>
    
    );
}

export default ListCharacter;