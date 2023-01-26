import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"

const MealItemform=(props)=>{
  return(
    <form className={classes.form}>
      <Input label={"Amount"} input={{id:("amount_"+props.id),type:"number",min :"0",max:"5",step:"1",defaultValue:"0"}}/>
      <button>+ Add</button>
    </form>
  )
}

export default MealItemform;