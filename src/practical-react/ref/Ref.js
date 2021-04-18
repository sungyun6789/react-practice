import React, { useRef, useEffect } from 'react';

const Ref = () => {
  const inputRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <InputAndSave inputRef={inputRef} />
      <Button ref={buttonRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
};

export default Ref;

function InputAndSave({ inputRef, buttonRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button ref={buttonRef}>저장</button>
    </div>
  );
}

const Button = React.forwardRef(function ({ onClick }, ref) {
  return (
    <button onClick={onClick} ref={ref}>
      저장
    </button>
  );
});

// ref를 조건부 렌더링에서 사용할 때는 current 속성을 검사하는 코드를 작성해야 한다.
