import { useEffect, useRef } from 'react';

const EffectComponent2 = ({ onClick }) => {
  const onClickRef = useRef();
  useEffect(() => {
    onClickRef.current = onClick;
  });

  useEffect(() => {
    window.addEventListener('click', () => {
      onClickRef.current();
      // ...
    });
    //...
  });
  //...
};

export default EffectComponent2;
