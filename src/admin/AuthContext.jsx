import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { auth } from './auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => auth.currentUser());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const existing = auth.currentUser();
    if (existing) setUser(existing);
  }, []);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const loggedInUser = await auth.login(email, password, true);
      setUser(loggedInUser);
      return loggedInUser;
    } catch (err) {
      setError(err.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const acceptInvite = useCallback(async (token, password) => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await auth.acceptInvite(token, password, true);
      setUser(newUser);
      return newUser;
    } catch (err) {
      setError(err.message || 'Could not accept invite');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const requestRecovery = useCallback(async (email) => {
    setLoading(true);
    setError(null);
    try {
      await auth.requestPasswordRecovery(email);
    } catch (err) {
      setError(err.message || 'Could not request password recovery');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const recover = useCallback(async (token, password) => {
    setLoading(true);
    setError(null);
    try {
      const recoveredUser = await auth.recover(token, true);
      await recoveredUser.update({ password });
      setUser(recoveredUser);
      return recoveredUser;
    } catch (err) {
      setError(err.message || 'Could not reset password');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    if (user) {
      await user.logout();
    }
    setUser(null);
  }, [user]);

  const getToken = useCallback(async () => {
    if (!user) throw new Error('Not logged in');
    return user.jwt();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, loading, error, login, acceptInvite, requestRecovery, recover, logout, getToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
