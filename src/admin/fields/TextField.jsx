import React from 'react';

const TextField = ({ label, value, onChange, placeholder }) => (
  <label className="admin-field">
    <span className="admin-field-label">{label}</span>
    <input
      type="text"
      className="admin-input"
      value={value || ''}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

export default TextField;
