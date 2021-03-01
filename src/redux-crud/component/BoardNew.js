import React from 'react';

const BoardNew = ({ changeInput, inputData, onSaveButtonClick, resetForm }) => {
  const saveBtnClick = (e) => {
    e.preventDefault();
    onSaveButtonClick(inputData);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={saveBtnClick}>
        <div>
          제목 :
          <input
            type="text"
            name="boardTitle"
            onChange={changeInput}
            value={inputData.boardTitle}
          />
        </div>
        <div>
          내용 :
          <input
            type="text"
            name="boardContent"
            onChange={changeInput}
            value={inputData.boardContent}
          />
        </div>
        <input type="hidden" name="boardId" onChange={changeInput} value={inputData.boardId} />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default BoardNew;
