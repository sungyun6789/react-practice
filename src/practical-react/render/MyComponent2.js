import React, { useState } from 'react';

const MyComponent2 = () => {
  const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);
  const [newFruit, setNewFruit] = useState('');
  function addNewFruit() {
    // fruits.push(newFruit);
    setFruits([...fruits, newFruit]);
    setNewFruit('');
  }
  return (
    <div>
      <Select options={fruits} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>추가하기</button>
    </div>
  );
};

export default MyComponent2;

const Select = React.memo(({ options }) => (
  <div>
    {options.map((item) => (
      <p key={item.index}>{item}</p>
    ))}
  </div>
));
