import React, { useEffect, useState } from 'react';

const MyComponent4 = () => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag((prev) => !prev), 1000);
  });

  return (
    <div
      className={flag ? 'yes' : 'no'}
      style={{ color: 'black', backgroundColor: flag ? '#ffaaa' : '#aaffaa' }}
    >
      <Counter />
      <p>사과</p>
      <p>바나나</p>
    </div>
  );
};

export default MyComponent4;

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setCount((prev) => prev + 1), 100);
    return () => clearTimeout(id);
  });
  return <p>count: {count}</p>;
}
