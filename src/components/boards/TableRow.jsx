import React from 'react';
import TableData from './TableData';

const TableRow = ({info, handleEdit, handleRemove}) => {
  return (
    <tbody>
      {
        info.map(item => {
          return (
            <TableData key={item.id} item={item} handleEdit={handleEdit} handleRemove={handleRemove} />
          )
        })
      }
    </tbody>
  )
}

export default TableRow