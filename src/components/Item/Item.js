import React, {useState, useContext} from 'react';
import {FaTimesCircle, FaCheckCircle} from '../../../node_modules/react-icons/fa';
import {BudContext} from '../../store/bud-context';

import styles from './Item.module.css';

const Item = (props) => {

  const ctx = useContext(BudContext);
  const [completed, setCompleted] = useState(false);
  
  const removeItemHandler = () => {
    ctx.onRemoveItem(props.id);
  }

  const rightClickHandler = e => {
    e.preventDefault();
    ctx.onRemoveItem(props.id);
  }
  
  const completeItemHandler = (e) => {
    if(e.target.parentNode.id == 'closeBtn' || e.target.parentNode.parentNode.id == 'closeBtn') {
      return;
    } else {
      ctx.onCheckItem(props.id);
    }
  }

  return (
    <li onContextMenu={rightClickHandler} className={`${props.checked && styles['checked']} ${styles.item}`} onClick={completeItemHandler} id={props.id}>
      <h3 className={`${props.checked && styles['checked']}`}>{props.text}</h3>
      <span id="closeBtn" onClick={removeItemHandler}><FaTimesCircle /></span>
      <span><FaCheckCircle /></span>
    </li>
  )
}

export default Item