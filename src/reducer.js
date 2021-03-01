import { createAction, createReducer } from '@reduxjs/toolkit';

// Action Type
const MODE_REMOVE = 'REMOVE';
const MODE_SAVE = 'SAVE';
const MODE_SELECT_ROW = 'SELECT_ROW';

// Action create function
export const boardSave = createAction(MODE_SAVE, (saveData) => saveData);
export const boardRemove = createAction(MODE_REMOVE, (boardId) => boardId);
export const boardSelectRow = createAction(MODE_SELECT_ROW, (boardId) => boardId);

// initState
const initialState = {
  boards: [],
  lastId: 0,
  selectRowData: {},
};

// createReducer 를 사용하면 가독성이 좋은 코드로 바꿀 수 있다
export default createReducer(initialState, {
  [MODE_REMOVE]: (state, { payload: boardId }) => {
    return { ...state, boards: state.boards.filter((row) => row.boardId !== boardId) };
  },
  [MODE_SAVE]: (state, { payload: saveData }) => {
    if (saveData.boardId === '') {
      return {
        lastId: state.lastId + 1,
        boards: state.boards.concat({ ...saveData, boardId: state.lastId + 1 }),
        selectRowData: {},
      };
    } else {
      return {
        ...state,
        boards: state.boards.map((data) =>
          data.boardId === saveData.boardId ? { ...saveData } : data,
        ),
        selectRowData: {},
      };
    }
  },
  [MODE_SELECT_ROW]: (state, { payload: boardId }) => {
    return { ...state, selectRowData: state.boards.find((row) => row.boardId === boardId) };
  },
});
