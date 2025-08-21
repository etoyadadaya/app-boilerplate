import ky from 'ky';

export const api = ky.create({
  prefixUrl: 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
