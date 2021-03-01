import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const BoardList = ({ id, boardId, boardTitle, boardContent, onRowClick, onRemoveButtonClick }) => {
  return (
    <TableRow>
      <TableCell onClick={() => onRowClick(id, boardId, boardTitle, boardContent)}>
        {boardId}
      </TableCell>
      <TableCell onClick={() => onRowClick(id, boardId, boardTitle, boardContent)}>
        {boardTitle}
      </TableCell>
      <TableCell onClick={() => onRowClick(id, boardId, boardTitle, boardContent)}>
        {boardContent}
      </TableCell>
      <TableCell>
        <button onClick={() => onRemoveButtonClick(id)}>삭제</button>
      </TableCell>
    </TableRow>
  );
};

export default BoardList;
