import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { uploadImage } from '../githubApi';
import { cacheUploadedImage } from '../imageCache';
import AdminImage from './AdminImage';

const ImageField = ({ label, value, onChange, folder }) => {
  const { getToken } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const token = await getToken();
      const path = await uploadImage(file, folder, token);
      cacheUploadedImage(path, file);
      onChange(path);
    } catch (err) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="admin-field admin-field-image">
      <span className="admin-field-label">{label}</span>
      <div className="admin-image-row">
        {value ? (
          <AdminImage src={value} alt="" className="admin-image-preview" />
        ) : (
          <div className="admin-image-preview admin-image-preview-empty">No image</div>
        )}
        <div className="admin-image-controls">
          <input
            type="text"
            className="admin-input"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/upload/images/..."
          />
          <label className="admin-upload-button">
            {uploading ? 'Uploading…' : 'Upload new image'}
            <input type="file" accept="image/*" onChange={handleFile} disabled={uploading} hidden />
          </label>
          {error && <span className="admin-field-error">{error}</span>}
        </div>
      </div>
    </div>
  );
};

export default ImageField;
