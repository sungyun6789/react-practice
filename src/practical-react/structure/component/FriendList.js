import React from 'react';

const FriendList = () => {
  return (
    <ul>
      {friendsWithAgeLimit.map((friend) => (
        <li key={friend.id}>{`${friend.name} (${friend.age})`}</li>
      ))}
    </ul>
  );
};

const MAX_AGE_LIMIT = 20;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];

export default FriendList;
