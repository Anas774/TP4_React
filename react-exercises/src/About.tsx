import {Link} from "react-router-dom";

function About() {
    return (
        <div className = "about">
            <p>A propos de nous !!!</p>
            <Link to="/">Retour à l'acceuil</Link>
        </div>
    )
}
export default About;