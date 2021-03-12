const myLogger = (store) => (next) => (action) => {
  console.log(action); // 먼저 액션을 출력
  const result = next(action); // 다음 미들웨어(또는 리듀서)에게 액션을 전달

  // 업데이트 이후의 상태를 조회
  console.log('\t', store.getState());

  return result;
};

// const thunk = (store) => (next) => (action) => {
//   typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);

//   const myThunk = () => (dispatch, getState) => {
//     dispatch({ type: 'HELLO' }), dispatch({ type: 'BYE' });
//   };

//   dispatch(myThunk());
// };

// export default myLogger;
