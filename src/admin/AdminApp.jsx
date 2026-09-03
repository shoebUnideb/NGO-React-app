import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import '../styles/admin.css';

const AdminInner = () => {
  const { token } = useAuth();
  return token ? <Dashboard /> : <LoginForm />;
};

const AdminApp = () => {
  useEffect(() => {
    document.title = 'Content Manager — Creative Youth Academy';
    return () => { document.title = 'Creative Youth Academy'; };
  }, []);

  return (
    <AuthProvider>
      <AdminInner />
    </AuthProvider>
  );
};

export default AdminApp;
