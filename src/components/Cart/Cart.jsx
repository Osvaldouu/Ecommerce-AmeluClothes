import {TbGardenCart} from "react-icons/tb"
import "../Cart/cart.css"


export const Cart = ()=>{

   return(
    <>
      <div className="cart-container">
          <TbGardenCart className="carrito "/>
          <span className="total">0</span>
      </div>
    </>
   )

}