import React, { useState, useEffect } from 'react';

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

    useEffect(() => {
        const localItems = JSON.parse(window.localStorage.getItem('items'));
        if(localItems) setItems(localItems);
    }, [])

    const addItemHandler = (obj) => {
        const newArray = [obj, ...items];
        setItems(newArray);
        localStorage.setItem("items", JSON.stringify(newArray));
    }

    const clearAllHandler = () => {
        setItems([]);
        localStorage.clear();
    }

    const removeItemHandler = (id) => {
        const localItems = JSON.parse(localStorage.getItem('items'));
        const filtered = localItems.filter(item => item.id !== id);
        localStorage.setItem('items', JSON.stringify(filtered));
        setItems(filtered);
    }

    const checkItemHandler = (id) => {
        const localItems = JSON.parse(localStorage.getItem('items'));
        let foundItem = localItems.find(item => item.id == id);
        let indexOfItem = localItems.indexOf(foundItem);
        foundItem = {...foundItem, checked: !foundItem.checked};
        let newItems = [...localItems];
        newItems[indexOfItem] = foundItem;
        localStorage.setItem('items', JSON.stringify(newItems));
        setItems(newItems);
    }

    const clearCompletedHandler = () => {
        const localItems = JSON.parse(localStorage.getItem('items'));
        const filtered = localItems.filter(item => item.checked == false);
        localStorage.setItem('items', JSON.stringify(filtered));
        setItems(filtered);
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