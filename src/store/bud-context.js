import React, { useState } from 'react';

export const BudContext = React.createContext({
    items: [],
    onAddItem: (object) => {},
    onClearAll: () => {},
    onRemoveItem: (id) => {},
    onCheckItem: (id) => {},
    onClearCompleted: () => {},
})

export default props => {
    const [items, setItems] = useState([]);

    const addItemHandler = (object) => {
        setItems(prevItems => {
            const newArray = [object, ...prevItems];
            return newArray;
        })
    }

    const clearAllHandler = () => {
        setItems([]);
    }

    const removeItemHandler = (id) => {
        setItems(prev => {
            return prev.filter(item => item.id !== id);
        })
    }

    const checkItemHandler = (id) => {
        setItems(prev => {
            let foundItem = prev.find(item => item.id == id);
            let indexOfItem = prev.indexOf(foundItem);
            foundItem = {...foundItem, checked: !foundItem.checked};
            let newItems = [...prev];
            newItems[indexOfItem] = foundItem;
            return newItems;
        })
    }

    const clearCompletedHandler = () => {
        setItems(prev => {
            let onlyUncheckedItems = prev.filter(item => item.checked == false);
            return onlyUncheckedItems;
        })
    }

    return (
        <BudContext.Provider value={{
            items: items,
            onAddItem: addItemHandler,
            onClearAll: clearAllHandler,
            onRemoveItem: removeItemHandler,
            onCheckItem: checkItemHandler,
            onClearCompleted: clearCompletedHandler,
        }}>
            {props.children}
        </BudContext.Provider>
    );
}