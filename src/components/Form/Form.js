import React, {useRef, useContext} from 'react';
import { BudContext } from '../../store/bud-context';
import { v4 as uuidv4 } from 'uuid';

import styles from './Form.module.css';

const Form = () => {

  const inputRef = useRef();
  const ctx = useContext(BudContext);

  const formSubmitHandler = e => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if(inputValue.length == 0) return;
    //else
    console.log(inputValue);
    const newItem = {
      id: uuidv4(),
      text: inputValue,
    }
    ctx.onAddItem(newItem);
    inputRef.current.value = ""
  }

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
        <input ref={inputRef} type="text" placeholder='e.g. eggs' />
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form