// Uploaded images are committed straight to GitHub and only become
// fetchable at their real URL once Netlify finishes its next deploy
// (a minute or more later). Cache a local object URL per uploaded path
// so the admin UI can show the file instantly instead of a broken image.
const cache = new Map();

export function cacheUploadedImage(path, file) {
  const previous = cache.get(path);
  if (previous) URL.revokeObjectURL(previous);
  const url = URL.createObjectURL(file);
  cache.set(path, url);
  return url;
}

export function getCachedImage(path) {
  return cache.get(path);
}
