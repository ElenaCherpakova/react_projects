import { initialFriends } from './data';
import React from 'react';
import Friend from './Friend';

function FriendsList() {
  const friends = initialFriends;
  console.log(friends);
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}/>
      ))}
    </ul>
  );
}

export default FriendsList;
