import React, {useState, useContext} from 'react';
import Item from '../Item/Item';
import {BudContext} from '../../store/bud-context';
import EditModal from '../EditModal/EditModal';
import ReactDOM from 'react-dom';

import styles from './List.module.css';

const List = () => {

  const [isEditModalShown, setIsEditModalShown] = useState(false);
  const [itemId, setItemId] = useState(null);
  const ctx = useContext(BudContext);

  const editItemHandler = (newText, newCheck) => {
    ctx.onEditItem(itemId, newText, newCheck)
  }

  const openModalHandler = (iId) => {
    setIsEditModalShown(true);
    setItemId(iId);
  }

  return (
    <ul className={styles.list}>
      {isEditModalShown && ReactDOM.createPortal(<EditModal onEditItem={editItemHandler} isModalShown={isEditModalShown} onModalShow={() => setIsEditModalShown(true)} onModalClose={() => setIsEditModalShown(false)}/>, document.getElementById('editModal-root'))}
      {ctx.items.map(item => <Item onModalShow={openModalHandler} id={item.id} key={item.id} text={item.text} checked={item.checked} />)}
    </ul>
  )
}

export default List