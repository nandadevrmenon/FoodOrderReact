import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import classes from './Modal.module.css'


const Backdrop =(props)=>{
 return <div className={classes.backdrop} onClick={props.onClick}></div>
};


const ModalContent = (props)=>{
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}


const portalElement = document.getElementById('overlay');

const Modal = (props)=>{


  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClickBackdrop}/>,portalElement)}
      {ReactDOM.createPortal(<ModalContent children={props.children}/>,portalElement)}
    </Fragment>
  )
}

export default Modal;