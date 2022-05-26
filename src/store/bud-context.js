import React, { useState } from 'react';

export const BudContext = React.createContext({
    items: [],
    onAddItem: (object) => {},
    onClearAll: () => {},
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

    return (
        <BudContext.Provider value={{
            items: items,
            onAddItem: addItemHandler,
            onClearAll: clearAllHandler,
        }}>
            {props.children}
        </BudContext.Provider>
    );
}