import React, { useState } from 'react';
import { getNextFriend } from './data';
import FriendList from './component/FriendList';
import NumberSelect from './component/NumberSelect';

const MyComponent = () => {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);

  const firendsWidthAgeLimit = friends.filter((item) => item.age <= ageLimit);

  function onAdd() {
    const firend = getNextFriend();
    setFriends;
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        label="세 이하만 보기"
        onChange={setAgeLimit}
      />
      <FriendList friends={firendsWidthAgeLimit} />
    </div>
  );
};

const MAX_AGE_LIMIT = 20;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];

export default MyComponent;

// 재활용 컴포넌트 기준
// 비지니스 로직이 없다
// 상태값이 없다. 단 마우스 오버와 같이 UI 효과르 위한 상태값은 제외한다
