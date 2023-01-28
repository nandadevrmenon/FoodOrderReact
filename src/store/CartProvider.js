import { useReducer } from "react"
import CartContext from "./Cart-context"


const defaultCart = {items:[],totalAmount:0};

const cartReducer = (state,action)=>{
  if(action.type==="ADD"){
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount+ (action.item.price*action.item.amount);
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  else if(action.type==="REMOVE"){

  }
}

const CartProvider = (props)=>{

  const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCart);


  const addItemToCart =(item)=>{
    dispatchCartAction({type:"ADD",item})
  }

  const removeItemFromCart =(id)=>{
    dispatchCartAction({type:"REMOVE",id})
  }
  const cartContext = {
    items:cartState.items,
    totalAmount:cartState.amount,
    addItem:addItemToCart,
    removeItem: removeItemFromCart
  }



  return(
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}


export default CartProvider;