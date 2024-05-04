import React, { useState } from "react";

function GroceryList({ groceries, onRemoveItem, onEditGroceryItem }) {
  const [editModeId, setEditModeId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleEditSubmit = (itemId) => {
    onEditGroceryItem(itemId, editValue);
    setEditModeId(null);
    setEditValue("");
  };

  return (
    <>
      <ul className="p-0 list-none ">
        {groceries.map((item) => (
          <li className="mb-2 flex justify-center items-center" key={item.id}>
            {editModeId === item.id ? (
              <>
                <input
                  type="text"
                  className="bg-[#97dfd9] w-[50%]  text-[#635fde]  font-medium border-solid rounded-lg outline-none  py-2 "
                  value={editValue}
                  onChange={handleEditChange}
                  autoFocus
                />
                <button
                  onClick={() => handleEditSubmit(item.id)}
                  className="ml-1 border-2 font-bold text-[#635fde] bg-yellow-300 my-4 px-2 py-1 rounded-lg"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <p className="bg-[#97dfd9] w-[50%]  text-[#635fde]  font-medium border-solid rounded-lg py-2 my-4 ">
                  {item.name}
                </p>
                <div className="flex">
                  <button
                    className="ml-1 border-2 font-bold text-[#635fde] bg-yellow-300 my-4 px-2 py-1 rounded-lg"
                    onClick={() => {
                      setEditModeId(item.id);
                      setEditValue(item.name);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="ml-1 border-2 font-bold text-[#635fde] bg-yellow-300 my-4 px-2 py-1 rounded-lg"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default GroceryList;

