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

  return (
    <main className={styles.bud}>
        {isModalShown && ReactDOM.createPortal(<Modal isModalShown={isModalShown} onModalShow={modalShowHandler} onModalClose={modalCloseHandler}/>, document.getElementById('modal-root'))}
        <h1>Grocery Bud</h1>
        <Form />
        <List />
        {ctx.items.length !== 0 && <button onClick={modalShowHandler}>Clear Items</button>}
    </main>
  )
}

export default Bud