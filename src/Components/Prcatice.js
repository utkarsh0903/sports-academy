// Table.js
import React, { useState } from 'react';

function Practice() {
  const [data, setData] = useState([
    { id: 1, option: 'Option 1', completed: false },
    { id: 2, option: 'Option 2', completed: false },
    { id: 3, option: 'Option 3', completed: true },
    // ...initial data
  ]);

  const [newRow, setNewRow] = useState({ id: '', option: '', completed: false });
  const [editRow, setEditRow] = useState(null);

  const handleInputChange = (e, field) => {
    setNewRow({ ...newRow, [field]: e.target.value });
  };

  const handleCheckboxChange = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setData(updatedData);
  };

  const handleAddRow = () => {
    if (newRow.id && newRow.option) {
      setData([...data, newRow]);
      setNewRow({ id: '', option: '', completed: false });
    }
  };

  const handleEditRow = (id) => {
    setEditRow(id);
  };

  const handleSaveRow = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? newRow : item
    );
    setData(updatedData);
    setEditRow(null);
  };

  const handleDeleteRow = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Options</th>
          <th>Completed</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>
              {editRow === row.id ? (
                <input
                  type="text"
                  value={newRow.option}
                  onChange={(e) => handleInputChange(e, 'option')}
                />
              ) : (
                row.option
              )}
            </td>
            <td>
              <input
                type="checkbox"
                checked={row.completed}
                onChange={() => handleCheckboxChange(row.id)}
              />
            </td>
            <td>
              {editRow === row.id ? (
                <button onClick={() => handleSaveRow(row.id)}>Save</button>
              ) : (
                <button onClick={() => handleEditRow(row.id)}>Edit</button>
              )}
            </td>
            <td>
              <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Option"
              value={newRow.option}
              onChange={(e) => handleInputChange(e, 'option')}
            />
          </td>
          <td>
            <input
              type="checkbox"
              checked={newRow.completed}
              onChange={() =>
                setNewRow({ ...newRow, completed: !newRow.completed })
              }
            />
          </td>
          <td>
            <button onClick={handleAddRow}>Add Row</button>
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Practice;
