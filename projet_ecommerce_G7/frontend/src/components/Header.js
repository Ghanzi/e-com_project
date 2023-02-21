import { Link } from "react-router-dom"

function Header(){
    return <div className={"container-fluid bg-light"}>
        <nav className={"navbar navbar-expand-sm"}>
          <ul className={"navbar-nav"}>
            <li className={"nav-item"}><Link className={"nav-link"} to={"/"}>Home</Link></li>  
            <li className={"nav-item"}><Link className={"nav-link"} to={"/products"}>Produits</Link></li>  
            <li className={"nav-item"}><Link className={"nav-link"} to={"/products/add"}>Ajouter un produit</Link></li>  
          </ul>  
        </nav>
    </div>
}
export default Header