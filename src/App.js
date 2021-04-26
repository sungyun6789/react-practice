import React from 'react';
import { createStore, applyMiddleware } from 'redux';

const saveToLocalStorage = (store) => (next) => (action) => {
  if (action.meta?.localStorageKey) {
    localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
  }
  return next(action);
};

const myReducer = (state = { name: 'mike' }, action) => {
  console.log('myReudcer');
  if (action.type === 'someAction') {
    return { name: 'mike2' };
  }
  return state;
};

const store = createStore(myReducer, applyMiddleware(saveToLocalStorage));
const cancel = store.dispatch({
  type: 'someAction',
  title: 'local',
  meta: { localStorageKey: 'myKey' },
});

cancel();

export default function App() {
  return <div>실전 리액트</div>;
}
