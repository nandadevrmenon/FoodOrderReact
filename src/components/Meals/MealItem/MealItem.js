import {useContext} from 'react'
import classes from "./MealItem.module.css"
import MealItemform from "./MealItemForm";
import CartContext from '../../../store/Cart-context';



const MealItem = (props)=>{

  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler=(enteredAmount)=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      price:props.price,
      amount:enteredAmount
    })
  }


  return(
    <li className={classes.meal}>
      <div>{props.name}</div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      <div>
        <MealItemform id={props.id} onAddToCart={addToCartHandler}></MealItemform>
      </div>
    </li>
  )
};

export default MealItem;