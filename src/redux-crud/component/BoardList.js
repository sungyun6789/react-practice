import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeDataAsync, searchDataAsync, saveDataAsync } from '../module/boardReducer';

const BoardList = () => {
  let [inputData, setInputData] = useState({
    id: '',
    boardId: '',
    boardTitle: '',
    boardContent: '',
  });

  const dispatch = useDispatch();

  const { boards, lastId } = useSelector((state) => state.boardReducer);

  const onSearchButtonClick = () => {
    resetForm();
    dispatch(searchDataAsync());
  };

  const onSaveButtonClick = (data) => {
    dispatch(saveDataAsync(data, lastId));
  };

  const saveBtnClick = (e) => {
    e.preventDefault();
    onSaveButtonClick(inputData);
    resetForm();
  };

  const onRemoveButtonClick = (id) => {
    dispatch(removeDataAsync(id));
  };

  const onRowClick = (id, boardId, boardTitle, boardContent) => {
    setInputData({
      id: id,
      boardId: boardId,
      boardTitle: boardTitle,
      boardContent: boardContent,
    });
  };

  const changeInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setInputData({
      boardId: '',
      boardTitle: '',
      boardContent: '',
    });
  };

  return (
    <div>
      <button onClick={onSearchButtonClick}>조회</button>
      <div>
        <form onSubmit={saveBtnClick}>
          <div>
            제목 : <input type="text" name="boardTitle" onChange={changeInput} value={inputData.boardTitle} />
          </div>
          <div>
            내용 : <input type="text" name="boardContent" onChange={changeInput} value={inputData.boardContent} />
          </div>
          <input type="hidden" name="boardId" onChange={changeInput} value={inputData.boardId} />
          <button type="submit">저장</button>
        </form>
      </div>
      <div>
        <table border="1">
          <tbody>
            <tr align="center">
              <td width="50">번호</td>
              <td width="100">제목</td>
              <td width="200">내용</td>
            </tr>
            {boards.length > 0 &&
              boards.map((row) => (
                <BoardList
                  key={row.boardId}
                  id={row.id}
                  boardId={row.boardId}
                  boardTitle={row.boardTitle}
                  boardContent={row.boardContent}
                  onRowClick={onRowClick}
                  onRemoveButtonClick={onRemoveButtonClick}
                />
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <form
          changeInput={changeInput}
          inputData={inputData}
          onSaveButtonClick={onSaveButtonClick}
          resetForm={resetForm}
        />
      </div>
    </div>
  );
};

export default BoardList;
