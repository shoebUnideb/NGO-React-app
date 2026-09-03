import GoTrue from 'gotrue-js';

export const auth = new GoTrue({
  APIUrl: `${window.location.origin}/.netlify/identity`,
  setCookie: false,
});
