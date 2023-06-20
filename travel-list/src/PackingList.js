import React from 'react';
import Item from './Item';

function PackingList({ items, onDeleteItem }) {
  return (
    <div className='list'>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
          ))}
        </ul>
      ) : (
        <p>No items found, please add some!</p>
      )}
    </div>
  );
}

export default PackingList;
