import { useContext } from "react";
import Modal from "../UI/Modal"
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-context";
import CartItem from './CartItem.js'

const Cart =(props)=>{
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler=(item)=>{
    cartCtx.addItem({...item,amount:1});
  }

  const cartItemRemoveHandler =(id)=>{
    cartCtx.removeItem(id);
  }


  const totalAmount = `$${Math.abs(cartCtx.totalAmount.toFixed(2))}`

  const cartItems = 
  <ul className={classes['cart-items']}>
    {cartCtx.items.map((item)=>{
      return (
        <CartItem 
        key={item.id} 
        name={item.name} 
        amount={item.amount}
        price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null,item.id)} 
        onAdd={cartItemAddHandler.bind(null,item)}
        />
      )
    })}
  </ul>
  return(
    <Modal onClickBackdrop={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className ={classes.button}> Place Order</button>
      </div>
    </Modal>
  )
}

export default Cart;