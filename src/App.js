import React from 'react';
import CounterContainer from './redux/containers/CounterContainer';
import TodosContainer from './redux/containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
