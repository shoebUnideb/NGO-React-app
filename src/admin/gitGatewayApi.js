const BRANCH = 'main';

// Git Gateway's own proxy (netlify/git-gateway's github.go) only allows paths
// matching ^/github/(contents|git|pulls|branches|merges|statuses|compare|commits)
// and injects the configured owner/repo itself before forwarding to GitHub's
// Contents API — so the client must NOT include repos/{owner}/{repo} here.
const API_ROOT = `${window.location.origin}/.netlify/git/github/contents`;

function base64ToUtf8(base64) {
  const binary = atob(base64.replace(/\n/g, ''));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder('utf-8').decode(bytes);
}

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return btoa(binary);
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return btoa(binary);
}

async function request(path, token, options = {}) {
  const res = await fetch(`${API_ROOT}/${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    let detail = '';
    try {
      const body = await res.json();
      detail = body.message || JSON.stringify(body);
    } catch {
      detail = res.statusText;
    }
    throw new Error(`Git Gateway request failed (${res.status}): ${detail}`);
  }
  return res.json();
}

export async function getJsonFile(path, token) {
  const result = await request(`${path}?ref=${BRANCH}`, token);
  const data = JSON.parse(base64ToUtf8(result.content));
  return { data, sha: result.sha };
}

export async function saveJsonFile(path, data, sha, message, token) {
  const content = utf8ToBase64(JSON.stringify(data, null, 2) + '\n');
  const result = await request(path, token, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, content, sha, branch: BRANCH }),
  });
  return { sha: result.content.sha };
}

export async function uploadImage(file, folder, token) {
  const buffer = await file.arrayBuffer();
  const content = arrayBufferToBase64(buffer);
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
  const fileName = `${Date.now()}-${safeName}`;
  const path = `public/upload/images/${folder}/${fileName}`;
  await request(path, token, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: `Upload image via admin panel: ${safeName}`,
      content,
      branch: BRANCH,
    }),
  });
  return `/upload/images/${folder}/${fileName}`;
}
