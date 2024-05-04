import React, { useState } from 'react';

function AddItemForm({ onAddItem }) {
  const [item, setItem] = useState('');

  const handleclick = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.trim())
     return;
    onAddItem(item);
    setItem('');
  };

  return (
    <>
      <form className='flex justify-center gap-3' onSubmit={handleSubmit}>
      <input
      className=' px-4 py-2 rounded-lg outline-none bg-[#d1dcdb] font-medium text-[#1c1b1b]'
        type="text"
        placeholder="Add grocery item"
        value={item}
        onChange={handleclick}
      />
      <button className=' px-4 py-2 rounded-lg bg-[#d1dcdb] font-medium text-[#232c8a]' type="submit">Add Item</button>
    </form>
    </>
  );
}

export default AddItemForm;
