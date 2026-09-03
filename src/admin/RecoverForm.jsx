import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const RecoverForm = ({ recoveryToken, onBackToLogin }) => {
  const { requestRecovery, recover, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sent, setSent] = useState(false);

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      await requestRecovery(email);
      setSent(true);
    } catch {
      // surfaced via context
    }
  };

  const handleSetPassword = async (e) => {
    e.preventDefault();
    try {
      await recover(recoveryToken, password);
    } catch {
      // surfaced via context
    }
  };

  if (recoveryToken) {
    return (
      <div className="admin-auth-screen">
        <div className="admin-auth-card">
          <img src="/logo.png" alt="Creative Youth Academy" className="admin-auth-logo" />
          <h1>Set a new password</h1>
          <form onSubmit={handleSetPassword} className="admin-auth-form">
            <label className="admin-field">
              <span className="admin-field-label">New password</span>
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
              {loading ? 'Saving…' : 'Set password & sign in'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-auth-screen">
      <div className="admin-auth-card">
        <img src="/logo.png" alt="Creative Youth Academy" className="admin-auth-logo" />
        <h1>Reset your password</h1>
        {sent ? (
          <p className="admin-auth-subtitle">
            If that email has an account, a reset link is on its way. Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleRequest} className="admin-auth-form">
            <label className="admin-field">
              <span className="admin-field-label">Email</span>
              <input
                type="email"
                className="admin-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </label>
            {error && <p className="admin-auth-error">{error}</p>}
            <button type="submit" className="admin-primary-button" disabled={loading}>
              {loading ? 'Sending…' : 'Send reset link'}
            </button>
          </form>
        )}
        <button type="button" className="admin-link-button" onClick={onBackToLogin}>
          Back to sign in
        </button>
      </div>
    </div>
  );
};

export default RecoverForm;
