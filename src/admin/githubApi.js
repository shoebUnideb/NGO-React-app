const OWNER = 'shoebUnideb';
const REPO = 'NGO-React-app';
const BRANCH = 'main';

// Talks to GitHub's REST API directly from the browser (GitHub sends
// Access-Control-Allow-Origin: * on these endpoints, confirmed by testing
// against this repo) instead of going through Netlify's Git Gateway proxy,
// which returns "Operator microservice headers missing" for every
// authenticated request on this site regardless of hosting platform.
const API_ROOT = `https://api.github.com/repos/${OWNER}/${REPO}`;

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
  // A trailing slash (e.g. verifyToken's empty path) routes to a GitHub
  // 404 handler whose CORS preflight omits Access-Control-Allow-Headers,
  // which browsers reject outright as "Failed to fetch" — so never join
  // with a trailing slash when path is empty.
  const url = path ? `${API_ROOT}/${path}` : API_ROOT;
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
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
    throw new Error(`GitHub request failed (${res.status}): ${detail}`);
  }
  return res.json();
}

export async function verifyToken(token) {
  const repoData = await request('', token);
  if (!repoData.permissions || !repoData.permissions.push) {
    throw new Error('This token does not have write access to the repository.');
  }
  return repoData;
}

export async function getJsonFile(path, token) {
  const result = await request(`contents/${path}?ref=${BRANCH}`, token);
  const data = JSON.parse(base64ToUtf8(result.content));
  return { data, sha: result.sha };
}

export async function saveJsonFile(path, data, sha, message, token) {
  const content = utf8ToBase64(JSON.stringify(data, null, 2) + '\n');
  const result = await request(`contents/${path}`, token, {
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
  await request(`contents/${path}`, token, {
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
