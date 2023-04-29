import {FaCarSide} from "react-icons/fa"
import {FaDollarSign} from "react-icons/fa"
import {IoIosHome} from "react-icons/io"
import "../Commercial/commercial.css"

export const Commercial = () =>{
   return(
    <>
    <div className="commercial-container">
        <div className="commercial">
            <FaCarSide className="log-com" />
            <div className="datos-com">
                <h3 className="title-com">ENVIOS A TODA LA CIUDAD</h3>
                <p className="subtitle-com">sin costos</p>
            </div>
        </div>
            <strong className="separado">|</strong>
        <div className="commercial">
            <FaDollarSign className="log-com"/>
            <div className="datos-com">
                <h3 className="title-com">SE RECIBEN TODO MEDIO DE PAGO</h3>
            </div>
        </div>
        <strong className="separado">|</strong>
        <div className="commercial">
            <IoIosHome className="log-com" />
            <div className="datos-com">
                <h3 className="title-com">DEMORA HASTA:</h3>
                <p className="subtitle-com">max: 30-40m</p>
            </div>
        </div>
    </div>
    </>
   )
}