import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Counter from '../component/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

const CounterContainer = () => {
  // 1 기존 사용 방식
  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));

  // 2 최적화 방법(1)
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);

  // 3 최적화 방법(2)
  // equalityFn?: (left: any, right: any) => boolean
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치하는 함수들을 props로 넣어준다
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
