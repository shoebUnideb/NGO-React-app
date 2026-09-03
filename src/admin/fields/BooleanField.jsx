import React from 'react';

const BooleanField = ({ label, value, onChange }) => (
  <label className="admin-field admin-field-boolean">
    <input
      type="checkbox"
      checked={!!value}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span className="admin-field-label">{label}</span>
  </label>
);

export default BooleanField;
