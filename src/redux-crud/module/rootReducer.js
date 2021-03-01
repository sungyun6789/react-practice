import { combineReducers } from 'redux';
import boardReducer, { boardSaga } from './boardReducer';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  boardReducer,
});

export function* rootSaga() {
  // all 은 여러 사가를 동시에 실행시켜준다.
  yield all([boardSaga()]);
}

export default rootReducer;
