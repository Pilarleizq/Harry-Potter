import { Link } from "react-router-dom";
import '../styles/Landing.scss'

function Landing () {
    return(
        <>
        <h1 className="landing-title">Welcome to Hogwarts</h1>
        <Link to ="/house" className="button">Go to characters!!</Link>
        <img className="gif" src="https://media.tenor.com/q1c-LNyfUhoAAAAi/dobby-con2020-dobby-con.gif" alt="gif"></img>
        </>
    )
}

export default Landing; 