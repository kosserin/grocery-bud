import React, {useState, useContext} from 'react';
import {FaTimesCircle, FaCheckCircle, FaPenSquare} from '../../../node_modules/react-icons/fa';
import {BudContext} from '../../store/bud-context';

import styles from './Item.module.css';

const Item = (props) => {

  const ctx = useContext(BudContext);
  
  const removeItemHandler = () => {
    ctx.onRemoveItem(props.id);
  }

  const rightClickHandler = e => {
    e.preventDefault();
    ctx.onRemoveItem(props.id);
  }
  
  const completeItemHandler = (e) => {
    if(e.target.parentNode.id === 'closeBtn' || e.target.parentNode.parentNode.id === 'closeBtn' || e.target.parentNode.id === 'editBtn' || e.target.parentNode.parentNode.id === 'editBtn') {
      return;
    } else {
      ctx.onCheckItem(props.id);
    }
  }

  const editItemHandler = () => {
    props.onModalShow(props.id, props.text, props.checked);
  }

  return (
    <li onContextMenu={rightClickHandler} className={`${props.checked && styles['checked']} ${styles.item}`} onClick={completeItemHandler} id={props.id}>
      <h3 className={`${props.checked && styles['checked']}`}>{props.text}</h3>
      <div className={styles['item-actions']}>
      <span className={styles['edit-btn']} onClick={editItemHandler} id="editBtn"><FaPenSquare /></span>
      <span className={styles['close-btn']} id="closeBtn" onClick={removeItemHandler}><FaTimesCircle /></span>
      <span className={styles['check-btn']} onClick={completeItemHandler}><FaCheckCircle /></span>
      </div>
    </li>
  )
}

export default Item