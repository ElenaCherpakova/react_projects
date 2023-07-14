import { useState } from 'react';
import FriendsList from './FriendsList';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
import { initialFriends } from './data';
function App() {
  const [showForm, setShowForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };
  
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} />
        {showForm && <FormAddFriend onAdd={handleAddFriend} />}
        <Button onClick={handleShowForm}>
          {showForm ? 'Add Friend' : 'Close'}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
