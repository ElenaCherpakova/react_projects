import React, { useState } from 'react';

function From() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleChangeInput = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeQty = (e) => {
    setQuantity(+e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setDescription('');
    setQuantity(1);
  };
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip 😍?</h3>
      <select onChange={handleChangeQty} value={quantity}>
        {Array.from({ length: 20 }, (_, idx) => idx + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        onChange={handleChangeInput}
        value={description}
      />
      <button>Add</button>
    </form>
  );
}

export default From;
