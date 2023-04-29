import logo from "../../assets/logoedit1.png"
import {GoMegaphone} from "react-icons/go"
import { Cart } from "../Cart/Cart"
import "../Navbar/navbar.css"


export const Navbar = () => {
    return (
        <>
        <nav className="nav-container container">
            <div className="info-container">
                <img src={logo} alt="logo amelu" className="img-logo" />
                 <h3 className="title"> AmelúClothes </h3>
            </div>
             <ul className="dat-container">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Invierno {"'23"}</li>
             </ul>
            <Cart />
        </nav>
        <div className="anuncio">
            <GoMegaphone/>
            <span className="anuncio-title">Descuentos de hasta el 30%</span>
            <GoMegaphone />
        </div>
        </>
    )
}