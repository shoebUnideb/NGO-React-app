import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { getJsonFile, saveJsonFile } from './githubApi';

/**
 * Like useJsonFile, but loads and saves several files together as one form.
 * `fileConfigs`: [{ key, path }]. Saving writes files in the order given —
 * callers should order dependents after what they depend on.
 */
export function useMultiJsonFile(fileConfigs) {
  const { getToken } = useAuth();
  const [files, setFiles] = useState({});
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
        const results = await Promise.all(fileConfigs.map((fc) => getJsonFile(fc.path, token)));
        if (!cancelled) {
          const next = {};
          fileConfigs.forEach((fc, i) => {
            next[fc.key] = { data: results[i].data, sha: results[i].sha };
          });
          setFiles(next);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load content');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setData = useCallback((key, updater) => {
    setFiles((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        data: typeof updater === 'function' ? updater(prev[key].data) : updater,
      },
    }));
  }, []);

  const save = useCallback(async (commitMessages) => {
    setSaving(true);
    setError(null);
    setSuccess(false);
    try {
      const token = await getToken();
      let current = files;
      for (const fc of fileConfigs) {
        const result = await saveJsonFile(fc.path, current[fc.key].data, current[fc.key].sha, commitMessages[fc.key], token);
        current = { ...current, [fc.key]: { ...current[fc.key], sha: result.sha } };
      }
      setFiles(current);
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, getToken]);

  return { files, loading, saving, error, success, setData, save };
}
