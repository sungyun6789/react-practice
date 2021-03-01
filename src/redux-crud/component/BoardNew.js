import React from 'react';
import TextField from '@material-ui/core/TextField';

const BoardNew = ({ changeInput, inputData, onSaveButtonClick, resetForm }) => {
  const saveBtnClick = (e) => {
    e.preventDefault();
    onSaveButtonClick(inputData);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={saveBtnClick}>
        <div align="center">
          <div>
            <TextField
              id="boardTitle"
              label="글제목"
              name="boardTitle"
              onChange={changeInput}
              value={inputData.boardTitle}
            />
          </div>
          &nbsp;
          <div>
            <TextField
              id="boardContent"
              label="내용"
              name="boardContent"
              onChange={changeInput}
              value={inputData.boardContent}
            />
          </div>
        </div>
        <TextField type="hidden" name="boardId" onChange={changeInput} value={inputData.boardId} />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default BoardNew;
