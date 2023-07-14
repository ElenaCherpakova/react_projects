import React from 'react';
import Button from './Button';
function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          Your friend {friend.name} owe you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && (
        <p>You and {friend.name} and your friend even.</p>
      )}
      <Button>Select</Button>
    </li>
  );
}

export default Friend;
