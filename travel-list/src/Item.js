import React from 'react';

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div>
      <li className='list-item'>
        <input
          type='checkbox'
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </div>
  );
}

export default Item;
