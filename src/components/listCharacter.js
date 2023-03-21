import Character from "./Character";

function listCharacter ({list}) {
    const dataHtml = list => {
        return <Character/>
    }
return (
    
        <ul className="list">
            {dataHtml}
        </ul>
    
    );
}

export default listCharacter;