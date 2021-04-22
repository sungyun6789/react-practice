import React from 'react';

const NumberSelect = ({ value, options, label, onChange }) => {
  function onChangeOption(e) {
    const value = Number(e.currentTarget.value);
    onChange(value);
  }

  return (
    <div>
      <select onChange={onChangeOption} value={value}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {label}
    </div>
  );
};

export default NumberSelect;

// 재활용 컴포넌트 기준
// 비지니스 로직이 없다
// 상태값이 없다. 단 마우스 오버와 같이 UI 효과르 위한 상태값은 제외한다
