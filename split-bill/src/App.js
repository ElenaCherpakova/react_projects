import { useState } from 'react';
import FriendsList from './FriendsList';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList />
        {showForm && <FormAddFriend />}
        <Button onClick={handleShowForm}>
          {showForm ? 'Add Friend' : 'Close'}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
