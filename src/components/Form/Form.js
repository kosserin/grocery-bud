import React, {useState, useRef, useContext} from 'react';
import { BudContext } from '../../store/bud-context';
import { v4 as uuidv4 } from 'uuid';

import styles from './Form.module.css';

const Form = () => {

  const inputRef = useRef();
  const ctx = useContext(BudContext);
  const [error, setError] = useState(false);

  const formSubmitHandler = e => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if(inputValue.length == 0) {
      setError(true);
      return;
    } else {
      console.log(inputValue);
    const newItem = {
      id: uuidv4(),
      text: inputValue,
      checked: false,
    }
    ctx.onAddItem(newItem);
    inputRef.current.value = "";
    }
  }

  const focusInputHandler = () => {
    setError(false);
  }

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
        <input className={`${error && styles['error']}`} onFocus={focusInputHandler} ref={inputRef} type="text" placeholder='e.g. eggs' />
        <button className={`${error && styles['error']}`} disabled={error} type="submit">Submit</button>
    </form>
  )
}

export default Form