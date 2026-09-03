import React from 'react';

const FormShell = ({ title, loading, saving, error, success, onSave, children }) => {
  if (loading) {
    return <div className="admin-form-loading">Loading…</div>;
  }

  return (
    <div className="admin-form">
      <div className="admin-form-header">
        <h1>{title}</h1>
        <button type="button" className="admin-primary-button" onClick={onSave} disabled={saving}>
          {saving ? 'Saving…' : 'Save & Publish'}
        </button>
      </div>

      {error && <div className="admin-banner admin-banner-error">{error}</div>}
      {success && <div className="admin-banner admin-banner-success">Saved — the live site will update in about a minute.</div>}

      <div className="admin-form-body">{children}</div>
    </div>
  );
};

export default FormShell;
