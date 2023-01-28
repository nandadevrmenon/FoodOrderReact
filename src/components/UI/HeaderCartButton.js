import { useContext } from "react"

import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/Cart-context"



const HeaderCartButton = (props)=>{

  const cartCtx =useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((result,item)=>{ return result+item.amount},0)
  return(
    <button  className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>
       {numberOfCartItems}
      </span>
    </button>
  )
}

export default HeaderCartButton;