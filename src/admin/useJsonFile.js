import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { getJsonFile, saveJsonFile } from './gitGatewayApi';

export function useJsonFile(path, commitMessage) {
  const { getToken } = useAuth();
  const [data, setData] = useState(null);
  const [sha, setSha] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const token = await getToken();
        const result = await getJsonFile(path, token);
        if (!cancelled) {
          setData(result.data);
          setSha(result.sha);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load content');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const save = useCallback(async () => {
    setSaving(true);
    setError(null);
    setSuccess(false);
    try {
      const token = await getToken();
      const result = await saveJsonFile(path, data, sha, commitMessage, token);
      setSha(result.sha);
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  }, [path, data, sha, commitMessage, getToken]);

  return { data, setData, loading, saving, error, success, save };
}
