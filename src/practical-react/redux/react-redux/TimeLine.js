import React from 'react';

const TimeLine = ({ timelines }) => {
  return (
    <ul>
      {timelines.map((timeline) => (
        <li key={timeline.id}>{timeline.desc}</li>
      ))}
    </ul>
  );
};

export default TimeLine;
