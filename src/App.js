import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './middleware/pages/PostListPage';
import PostPage from './middleware/pages/PostPage';
import CounterContainer from './middleware/containers/CounterContainer'

const App = () => {
  return (
    <>
      <CounterContainer />
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </>
  );
};

export default App;
