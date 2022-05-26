import React from 'react';
import {FaCircle, FaTimesCircle, FaCheckCircle} from '../../../node_modules/react-icons/fa'

import styles from './Item.module.css';

const Item = (props) => {
  return (
    <li className={styles.item} id={props.id}>
      <h3>{props.text}</h3>
      <span><FaTimesCircle /></span>
      <span><FaCheckCircle /></span>
    </li>
  )
}

export default Item