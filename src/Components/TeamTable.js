import React, { useState } from 'react';

function TeamTable() {
  const [data, setData] = useState([
    { id: 1, option: 'Aayush Garg', selected: 1 },
    { id: 2, option: 'Rahul Dhingra', selected: 0 },
    { id: 3, option: 'Yash Khandelwal', selected: 0 },
    { id: 4, option: 'Pradeep Mishra', selected: 0 },
  ]);

  const handleRadioChange = (id, optionIndex) => {
    const updatedData = data.map((item) => ({
      ...item,
      selected: item.id === id ? optionIndex : item.selected,
    }));
    setData(updatedData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Admin</th>
          <th>Controller</th>
          <th>Head Coach</th>
          <th>Coach</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.option}</td>
            {[1, 2, 3, 4].map((optionIndex) => (
              <td key={optionIndex}>
                <input
                  type="radio"
                  name={`radio_${row.id}`}
                  checked={row.selected === optionIndex}
                  onChange={() => handleRadioChange(row.id, optionIndex)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TeamTable;