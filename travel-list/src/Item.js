import React from 'react';

function Item({ item }) {
  return (
    <div>
      <li className='list-item'>
        <input type='checkbox' />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
          {item.quantity}
          {item.description}
        </span>
        <button>❌</button>
      </li>
    </div>
  );
}

export default Item;
