import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const LoginForm = ({ onSwitchToRecover }) => {
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch {
      // error is already surfaced via auth context
    }
  };

  return (
    <div className="admin-auth-screen">
      <div className="admin-auth-card">
        <img src="/logo.png" alt="Creative Youth Academy" className="admin-auth-logo" />
        <h1>Content Manager</h1>
        <p className="admin-auth-subtitle">Sign in to edit the CYA website</p>

        <form onSubmit={handleSubmit} className="admin-auth-form">
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
          <label className="admin-field">
            <span className="admin-field-label">Password</span>
            <input
              type="password"
              className="admin-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {error && <p className="admin-auth-error">{error}</p>}

          <button type="submit" className="admin-primary-button" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <button type="button" className="admin-link-button" onClick={onSwitchToRecover}>
          Forgot your password?
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
