import React, { useState } from 'react';

function TaskTable() {
  const [data, setData] = useState([
    { id: 1, name: 'Volleyball Team', type: 'Sport', completed:false },
    { id: 2, name: 'Basketball Team', type: 'Sport', completed:false },
    // ...initial data
  ]);

  const [newRow, setNewRow] = useState({ id: '', name: '', type: '',completed:false });
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
    if (newRow.id && newRow.name && newRow.type) {
      setData([...data, newRow]);
      setNewRow({ id: '', name: '', type: '',completed:false });
    }
  };

  const handleEditRow = (row) => {
    setEditRow(row.id);
  };

  const handleSaveRow = (row) => {
    const updatedData = data.map((item) =>
      item.id === row.id ? newRow : item
    );
    setData(updatedData);
    setEditRow(null);
  };

  const handleDeleteRow = (row) => {
    const updatedData = data.filter((item) => item.id !== row.id);
    setData(updatedData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Type</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{editRow === row.id ? <input type="text" value={newRow.id} onChange={(e) => handleInputChange(e, 'id')} /> : row.id}</td>
              <td>{editRow === row.id ? <input type="text" value={newRow.name} onChange={(e) => handleInputChange(e, 'name')} /> : row.name}</td>
              <td>{editRow === row.id ? <input type="text" value={newRow.type} onChange={(e) => handleInputChange(e, 'type')} /> : row.type}</td>
              <td>
              <input
                type="checkbox"
                checked={row.completed}
                onChange={() => handleCheckboxChange(row.id)}
              />
            </td>
              <td>
                {editRow === row.id ? (
                  <>
                    <button onClick={() => handleSaveRow(row)}>Save</button>
                    <button onClick={() => setEditRow(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditRow(row)}>Edit</button>
                    <button onClick={() => handleDeleteRow(row)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input type="text" placeholder="ID" value={newRow.id} onChange={(e) => handleInputChange(e, 'id')} />
        <input type="text" placeholder="Task" value={newRow.name} onChange={(e) => handleInputChange(e, 'name')} />
        <input type="text" placeholder="Type" value={newRow.type} onChange={(e) => handleInputChange(e, 'type')} />
            <input
              type="checkbox"
              checked={newRow.completed}
              onChange={() =>
                setNewRow({ ...newRow, completed: !newRow.completed })
              } />
        <button onClick={handleAddRow}>Add Row</button>
      </div>
    </div>
  );
}

export default TaskTable;
