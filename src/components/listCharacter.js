 import Character from "./Character";

function ListCharacter ({list}) {
    const dataHtml = list.map(eachCharacter => {
        return <Character key={eachCharacter.id} Character={eachCharacter}/>
    })

const errorMessage = (list.length === 0) && (
    <p className="error">This card doesn't exist!!!</p>
);
console.log(list.length)
return (
    <section className="section">
    {errorMessage}
        <ul className="list">
            {dataHtml}
            
        </ul>
    </section>
    );
}

export default ListCharacter;