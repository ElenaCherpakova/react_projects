import React, { useState } from 'react';
import Button from './Button';

function FormAddFriend({ onAdd }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAdd(newFriend);
    setName('');
    setImage('');
  };
  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>👬Friend Name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}></input>
      <label>🌆 Image URL</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}></input>
      <Button>Add Friend</Button>
    </form>
  );
}

export default FormAddFriend;
