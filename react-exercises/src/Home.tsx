import {Link} from "react-router-dom";

function Home() {
   return (
       <div className="home">
           <h1>Bienvenue sur le Blog</h1>
           <Link to="/posts">Les post</Link>
           <Link to="/about">A propos</Link>
       </div>
   )
}
export default Home