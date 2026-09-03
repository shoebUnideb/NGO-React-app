import React, { createContext, useContext, useState, useCallback } from 'react';
import { verifyToken } from './githubApi';

const STORAGE_KEY = 'cya_admin_gh_token';
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async (pat) => {
    setLoading(true);
    setError(null);
    try {
      await verifyToken(pat);
      localStorage.setItem(STORAGE_KEY, pat);
      setToken(pat);
    } catch (err) {
      setError(err.message || 'Could not verify this token');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
  }, []);

  const getToken = useCallback(async () => {
    if (!token) throw new Error('Not logged in');
    return token;
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, loading, error, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
