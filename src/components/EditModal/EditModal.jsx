import React, {useState, useRef} from 'react';

import styles from './EditModal.module.css';

const Background = (props) => {
    return (
        <div className={styles.background} onClick={() => {props.onModalClose()}}></div>
    );
}

const Text = (props) => {

    const textRef = useRef();
    const checkedRef = useRef();
    const [error, setError] = useState(null);
    const [checkedValue, setCheckedValue] = useState(false);

    const editSubmitHandler = e => {
        e.preventDefault();
        const textValue = textRef.current.value;
        if(textValue.length === 0) {
            setError(true);
            return;
        } else {
            props.onEditItem(textValue, checkedValue);
            props.onModalClose();
        }
    }

    const focusTextHandler = () => {
        setError(false);
    }

    const isChecked = e => {
        setCheckedValue(e.target.checked);
    }

  return (
    <form onSubmit={editSubmitHandler} className={styles.text}>
        <div className={styles['form-group']}>
            <label>Change name of your item:</label>
            <input className={`${error && styles['error-input']}`} onFocus={focusTextHandler} ref={textRef} type="text" />
        </div>
        <div className={styles['form-group']}>
            <label>Checked:</label>
            <input onChange={isChecked} ref={checkedRef} type="checkbox" />
        </div>
        <div className={styles.actions}>
            <button type='submit' className={`${error && styles['error-btn']}`} disabled={error}>Change</button>
            <button onClick={() => {props.onModalClose()}}>Cancel</button>
        </div>
    </form>
  )
}

const Modal = (props) => {
    return (
        <React.Fragment>
            <Background onModalClose={props.onModalClose} />
            <Text onEditItem={props.onEditItem} onModalClose={props.onModalClose} onModalShow={props.onModalShow}/>
        </React.Fragment>
    );
}

export default Modal;