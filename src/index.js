import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './middleware/modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import myLogger from './middleware/middlewares/myLogger';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
