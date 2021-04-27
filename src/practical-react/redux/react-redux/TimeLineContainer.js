import React, { useEffect, useReducer } from 'react';
import TimeLine from './TimeLine';
// import {getNextTimeLine} from

const TimeLineContainer = () => {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => forceUpdate());
    return () => unsubscribe();
  }, []);
  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  }
  console.log('TimelineMain render');
  const timelines = store.getState().timeline.timelines;
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimeLine timelines={timelines} />
    </div>
  );
};

export default TimeLineContainer;
