import { Link } from "react-router-dom"

function NavBar(){
    return <header>
        <nav>
             <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/products"}>produits</Link></li>
                <li><Link to={"/products/add"}>Ajouter un produit</Link></li>
             </ul>
        </nav>
    </header>
}

export default NavBar