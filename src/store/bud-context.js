import React, { useState } from 'react';

export const BudContext = React.createContext({
    items: [],
    onAddItem: (object) => {},
    onClearAll: () => {},
    onRemoveItem: (id) => {},
    onCheckItem: (id) => {},
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
            console.log(indexOfItem);
            foundItem = {...foundItem, checked: true}
            prev[indexOfItem] = foundItem;
            console.log(prev);
            return prev;
        })
    }

    return (
        <BudContext.Provider value={{
            items: items,
            onAddItem: addItemHandler,
            onClearAll: clearAllHandler,
            onRemoveItem: removeItemHandler,
            onCheckItem: checkItemHandler,
        }}>
            {props.children}
        </BudContext.Provider>
    );
}