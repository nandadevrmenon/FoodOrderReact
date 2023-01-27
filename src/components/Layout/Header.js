import React,{Fragment} from "react";

import classes from "./Header.module.css"
import banner from "../../assets/banner.webp"
import HeaderCartButton from "../UI/HeaderCartButton";

const Header = (props)=>{
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodZap</h1>
        <HeaderCartButton onClick ={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src = {banner} alt ="A food flatlay"></img>
      </div>
    </Fragment>
  )
}

export default Header;