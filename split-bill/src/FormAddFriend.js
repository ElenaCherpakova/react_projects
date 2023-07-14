import React from 'react';
import Button from './Button';
function FormAddFriend() {
  return (
    <form className='form-add-friend'>
      <label>👬Friend Name</label>
      <input type='text'></input>
      <label>🌆 Image URL</label>
      <input type='text'></input>
      <Button>Add Friend</Button>
    </form>
  );
}

export default FormAddFriend;
