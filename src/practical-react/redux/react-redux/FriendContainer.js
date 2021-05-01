import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import TimeLine from './TimeLine';

const TimeLineContainer = () => {
  const [friends1, friends2] = useSelector(
    (state) => [state.friends.friends1, state.friends.friends2],
    shallowEqual,
  );
  const dispatch = useDispatch();

  function onAdd() {
    const friend = getNextTimeline();
    dispatch(addTimeline(friend));
  }

  console.log('FriendMain render');

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <TimeLine timelines={timelines} />
    </div>
  );
};

export default TimeLineContainer;
