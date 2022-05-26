import React, {useContext} from 'react';
import { BudContext } from '../../store/bud-context';

import styles from './Modal.module.css';

const Background = (props) => {
    return (
        <div className={styles.background} onClick={() => {props.onModalClose()}}></div>
    );
}

const Text = (props) => {

    const ctx = useContext(BudContext);

    const clearAllHandler = () => {
        ctx.onClearAll();
        props.onModalClose();
    }

  return (
    <div className={styles.text}>
        <p>Are you sure you want to delete all items you have added?</p>
        <div className={styles.actions}>
            <button onClick={clearAllHandler}>Yes, remove</button>
            <button onClick={() => {props.onModalClose()}}>No</button>
        </div>
    </div>
  )
}

const Modal = (props) => {
    return (
        <React.Fragment>
            <Background onModalClose={props.onModalClose} />
            <Text onModalClose={props.onModalClose} onModalShow={props.onModalShow}/>
        </React.Fragment>
    );
}

export default Modal;