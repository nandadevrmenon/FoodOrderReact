import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"

const MealItemform=(props)=>{
const[itemFormIsValid, setItemFormIsValid] = useState(true);

  const ItemAmountRef =useRef();

  const formSubmitHandler=(event)=>{
    event.preventDefault();

    const enteredAmount = ItemAmountRef.current.value;
    if(enteredAmount.trim().length ===0) {
      setItemFormIsValid(false);
      return
    }
    const amountNum = +enteredAmount;
    if(amountNum>5 || amountNum<1){
      setItemFormIsValid(false);
      return
    }

    if(!itemFormIsValid) setItemFormIsValid(true);
    props.onAddToCart(amountNum);
    

  }


  return(
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input 
      label={"Amount"} 
      input={{id:("amount_"+props.id),type:"number",min :"0",max:"5",step:"1",defaultValue:"0"}}
      ref={ItemAmountRef}/>
      <button>+ Add</button>
      {!itemFormIsValid &&<p>Item amount is not valid</p>}
    </form>
  )
}

export default MealItemform;