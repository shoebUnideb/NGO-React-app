import React, { useEffect, useMemo, useState } from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import LoginForm from './LoginForm';
import RecoverForm from './RecoverForm';
import AcceptInviteForm from './AcceptInviteForm';
import Dashboard from './Dashboard';
import '../styles/admin.css';

function parseHashToken() {
  const hash = window.location.hash.replace(/^#/, '');
  const params = new URLSearchParams(hash);
  return {
    inviteToken: params.get('invite_token'),
    recoveryToken: params.get('recovery_token'),
  };
}

const AdminInner = () => {
  const { user } = useAuth();
  const { inviteToken, recoveryToken } = useMemo(parseHashToken, []);
  const [showRecover, setShowRecover] = useState(false);

  if (user) return <Dashboard />;
  if (inviteToken) return <AcceptInviteForm inviteToken={inviteToken} />;
  if (recoveryToken) return <RecoverForm recoveryToken={recoveryToken} />;
  if (showRecover) return <RecoverForm onBackToLogin={() => setShowRecover(false)} />;
  return <LoginForm onSwitchToRecover={() => setShowRecover(true)} />;
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
