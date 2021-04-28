import React from 'react';
import { Provider } from 'react-redux';
import FriendContainer from './practical-react/redux/react-redux/FriendContainer';
import TimeLineContainer from './practical-react/redux/react-redux/TimeLineContainer';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <FriendContainer />
        <TimeLineContainer />
      </div>
    </Provider>
  );
}
