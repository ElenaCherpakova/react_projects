import React, { useState } from 'react';
import Button from './Button';

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPayByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  };
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill Value</label>
      <input
        type='text'
        value={bill}
        onChange={(e) => setBill(+e.target.value)}></input>
      <label>🧍‍♀️Your expenses</label>
      <input
        type='text'
        value={paidByUser}
        onChange={(e) =>
          setPayByUser(+e.target.value > bill ? paidByUser : e.target.value)
        }></input>
      <label>🧍🏻‍♀️{selectedFriend.name}'s expenses</label>
      <input type='text' disabled value={paidByFriend}></input>
      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
      <Button onClick={handleSubmit}>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
