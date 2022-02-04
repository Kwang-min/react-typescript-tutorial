import React, { useRef } from "react";

//타입스크립트는 어떤 요소가 선택될지 모르기 때문에, 우선 초기 값으로 null을 설정합니다. 
//이후 JSX 코드가 실행되면서 선택한 DOM을 가르키게 되는데, 이때 선택될 요소의 타입을 지정합니다.

const UseRefEx = () => {

  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    // inputEl.current 값이 있는 경우만 다음의 동작을 수행합니다
    if (inputEl.current) {
      inputEl.current.focus();
    }
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};

export default UseRefEx;