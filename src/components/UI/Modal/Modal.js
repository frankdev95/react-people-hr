import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const ModalMask = (props) => {
  return <div className={styles.mask} onClick={props.onClick}></div>;
};

const ModalContent = (props) => {
  return (
    <div className={`${styles.modal} ${props.className || ""}`}>
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalMask onClick={props.onMaskClick} />,
        document.getElementById("modal-container")
      )}
      {ReactDOM.createPortal(
        <ModalContent className={props.className}>
          {props.children}
        </ModalContent>,
        document.getElementById("modal-container")
      )}
    </Fragment>
  );
};

export default Modal;
