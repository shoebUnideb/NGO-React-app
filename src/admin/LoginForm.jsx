import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const LoginForm = () => {
  const { login, loading, error } = useAuth();
  const [pat, setPat] = useState('');
  const [showHelp, setShowHelp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(pat.trim());
    } catch {
      // error surfaced via auth context
    }
  };

  return (
    <div className="admin-auth-screen">
      <div className="admin-auth-card">
        <img src="/logo.png" alt="Creative Youth Academy" className="admin-auth-logo" />
        <h1>Content Manager</h1>
        <p className="admin-auth-subtitle">Paste your GitHub access token to sign in</p>

        <form onSubmit={handleSubmit} className="admin-auth-form">
          <label className="admin-field">
            <span className="admin-field-label">Access Token</span>
            <input
              type="password"
              className="admin-input"
              value={pat}
              onChange={(e) => setPat(e.target.value)}
              placeholder="github_pat_..."
              required
              autoFocus
            />
          </label>

          {error && <p className="admin-auth-error">{error}</p>}

          <button type="submit" className="admin-primary-button" disabled={loading || !pat}>
            {loading ? 'Checking…' : 'Sign in'}
          </button>
        </form>

        <button type="button" className="admin-link-button" onClick={() => setShowHelp((v) => !v)}>
          {showHelp ? 'Hide instructions' : "Don't have a token yet?"}
        </button>

        {showHelp && (
          <ol className="admin-auth-help">
            <li>Go to <strong>github.com/settings/personal-access-tokens/new</strong> (while signed into GitHub).</li>
            <li>Set <strong>Resource owner</strong> to <code>shoebUnideb</code> and <strong>Repository access</strong> to "Only select repositories" → choose <code>NGO-React-app</code>.</li>
            <li>Under <strong>Permissions → Repository permissions</strong>, set <strong>Contents</strong> to <strong>Read and write</strong>.</li>
            <li>Click <strong>Generate token</strong> and copy it — paste it above. Keep it private; it can edit the site.</li>
          </ol>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
