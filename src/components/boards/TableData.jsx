import React from 'react';

const TableData = ({item, handleEdit, handleRemove}) => {
  const onEdit = () => {
    handleEdit(item);
  }
  const onRemove = () => {
    handleRemove(item.id);
  }
  return (
    <>
      <tr className="bg-white border-2 border-gray-200">
        <td className="px-4 py-3">{item.id}</td>
        <td className="px-4 py-3">{item.name}</td>
        <td className="px-4 py-3">{item.email}</td>
        <td className="px-4 py-3">{item.phone}</td>
        <td className="px-4 py-3">{item.website}</td>
        <td onClick={onEdit} className="text-center text-purple-400 cursor-pointer">
          <ion-icon name="color-wand-outline"></ion-icon>
        </td>
        <td onClick={onRemove} className="text-center text-purple-400 cursor-pointer">
          <ion-icon name="trash-outline"></ion-icon>
        </td>
      </tr>
    </>
  )
}

export default TableData