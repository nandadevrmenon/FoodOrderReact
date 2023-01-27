
import Modal from "../UI/Modal"
import classes from "./Cart.module.css";

const Cart =(props)=>{

  const cartItems = 
  <ul className={classes['cart-items']}>
    {[{id:'c1',name:'sushi',amount:'2',price:12.99}].map((item)=>{
      return <li>{item.name}</li>
    })}
  </ul>
  return(
    <Modal onClickBackdrop={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className ={classes.button}> Place Order</button>
      </div>
    </Modal>
  )
}

export default Cart;