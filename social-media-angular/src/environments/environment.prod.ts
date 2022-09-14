export const environment = {
  production: true,
  baseUrl: "http://localhost:9002",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  },
  paramHeaders: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  },
};
