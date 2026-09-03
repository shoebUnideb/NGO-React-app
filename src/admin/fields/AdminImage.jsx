import React from 'react';
import { getCachedImage } from '../imageCache';

// Prefers a freshly-uploaded file's local blob URL (instant, always correct)
// over its real path, which may not be live on the deployed site yet.
const AdminImage = ({ src, alt = '', ...props }) => {
  const resolvedSrc = (src && getCachedImage(src)) || src;
  return <img src={resolvedSrc} alt={alt} {...props} />;
};

export default AdminImage;
