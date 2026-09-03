import React from 'react';
import TextField from './TextField';

const PageLinkField = ({ value, onChange, pages }) => {
  const matchedSlug = pages.find((p) => `/projects/${p.slug}` === value)?.slug || '';

  return (
    <>
      <label className="admin-field">
        <span className="admin-field-label">Link to a Project Page (optional shortcut)</span>
        <select
          className="admin-input"
          value={matchedSlug}
          onChange={(e) => {
            if (e.target.value) onChange(`/projects/${e.target.value}`);
          }}
        >
          <option value="">— Choose a page to auto-fill the link below —</option>
          {pages.map((p) => (
            <option key={p.slug} value={p.slug}>{p.title || p.slug}</option>
          ))}
        </select>
      </label>
      <TextField
        label="Link (internal path like /projects/visegrad, or a full URL)"
        value={value}
        onChange={onChange}
        placeholder="/projects/your-page-slug or https://..."
      />
    </>
  );
};

export default PageLinkField;
