import React, {useState, useContext} from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import {BudContext} from '../../store/bud-context';
import Modal from '../Modal/Modal'
import ReactDOM from 'react-dom';

import styles from './Bud.module.css';

const Bud = () => {

  const ctx = useContext(BudContext);
  const [isModalShown, setIsModalShown] = useState(false);

  const modalShowHandler = () => {
    setIsModalShown(true);
  }

  const modalCloseHandler = () => {
    setIsModalShown(false);
  }

  const clearCompletedHandler = () => {
    ctx.onClearCompleted();
  }

  return (
    <main className={styles.bud}>
        {isModalShown && ReactDOM.createPortal(<Modal isModalShown={isModalShown} onModalShow={modalShowHandler} onModalClose={modalCloseHandler}/>, document.getElementById('modal-root'))}
        <h1>Grocery Bud</h1>
        <Form />
        <List />
        {(ctx.items.find(item => item.checked == true) !== undefined || false) && <button className={styles['clear-completed__btn']} onClick={clearCompletedHandler}>Clear checked items</button>}
        {ctx.items.length !== 0 && <button className={styles['clear-all__btn']} onClick={modalShowHandler}>Clear All Items</button>}
    </main>
  )
}

export default Bud