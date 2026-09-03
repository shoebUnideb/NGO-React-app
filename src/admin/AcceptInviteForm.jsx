import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const AcceptInviteForm = ({ inviteToken }) => {
  const { acceptInvite, loading, error } = useAuth();
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await acceptInvite(inviteToken, password);
    } catch {
      // surfaced via context
    }
  };

  return (
    <div className="admin-auth-screen">
      <div className="admin-auth-card">
        <img src="/logo.png" alt="Creative Youth Academy" className="admin-auth-logo" />
        <h1>Welcome to CYA</h1>
        <p className="admin-auth-subtitle">Set a password to finish setting up your account.</p>
        <form onSubmit={handleSubmit} className="admin-auth-form">
          <label className="admin-field">
            <span className="admin-field-label">Choose a password</span>
            <input
              type="password"
              className="admin-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              autoFocus
            />
          </label>
          {error && <p className="admin-auth-error">{error}</p>}
          <button type="submit" className="admin-primary-button" disabled={loading}>
            {loading ? 'Setting up…' : 'Set password & sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AcceptInviteForm;
