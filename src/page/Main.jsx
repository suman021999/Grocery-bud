
import React, { useState } from 'react';
import Header from '../components/Header';
import GroceryList from '../components/GroceryList';
import AddItemForm from '../components/AddItemForm';
const Main = () => {
    const [groceries, setGroceries] = useState([]);

    const addGroceryItem = (itemName) => {
      setGroceries([...groceries, { id: Date.now(), name: itemName }]);
    };
  
    const removeGroceryItem = (itemId) => {
      setGroceries(groceries.filter(item => item.id !== itemId));
    };
    // const editGroceryItem = (itemId) => {
    //   setGroceries(groceries.filter(item => item.id !== itemId));
    // };

    const editGroceryItem = (itemId, newName) => {
      setGroceries(groceries.map(item => {
        if (item.id === itemId) {
          return { ...item, name: newName };
        }
        return item;
      }));
    };


  return (
    <>
    <div className='flex mt-5 justify-center items-center'>
    <div className="w-[50%] bg-teal-800  my-0 p-5 rounded-lg">
      <Header />
      <AddItemForm onAddItem={addGroceryItem} />
      <GroceryList groceries={groceries} onRemoveItem={removeGroceryItem} onEditGroceryItem={editGroceryItem}  />
    </div>
    </div>
    </>
  )
}

export default Main
