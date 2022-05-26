import React, {useContext} from 'react';
import Item from '../Item/Item';
import {BudContext} from '../../store/bud-context';

import styles from './List.module.css';

const List = () => {

  const ctx = useContext(BudContext);

  return (
    <ul className={styles.list}>
      {ctx.items.map(item => <Item id={item.id} key={item.id} text={item.text} />)}
    </ul>
  )
}

export default List