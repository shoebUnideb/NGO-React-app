import React from 'react';

const TextAreaField = ({ label, value, onChange, rows = 4, placeholder }) => (
  <label className="admin-field admin-field-textarea">
    <span className="admin-field-label">{label}</span>
    <textarea
      className="admin-textarea"
      rows={rows}
      value={value || ''}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

export default TextAreaField;
