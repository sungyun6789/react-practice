import React, { useMemo, useState } from 'react';

const Memo = () => {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);
  const value = useMemo(() => runExpensivejob(v1, v2), [v1, v2]);
  return (
    <div>
      <p>{`value is ${value}`}</p>
      <button
        onClick={() => {
          setV1(Math.random());
          setV2(Math.random());
        }}
      >
        v1 v2 수정
      </button>
      <p>{`v3 is ${v3}`}</p>
      <button onClick={() => setV3(Math.random())}>v3 수정</button>
    </div>
  );
};

export default Memo;

function runExpensivejob(v1, v2) {
  console.log('runExpensivejob is called');
  return v1 + v2;
}
