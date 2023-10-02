import React from 'react';

export default function Filter({ value, onChangeFilter }) {
  return (
    <label>
      Filter by name:
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
}
