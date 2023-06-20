import React from 'react';

function Item({ item, onDeleteItem }) {
  return (
    <div>
      <li className='list-item'>
        <input type='checkbox' />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
          {item.quantity}
          {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </div>
  );
}

export default Item;
