export const environment = {
  production: true,
//  baseUrl: "http://44.201.120.76:9002",
  baseUrl: "http://localhost:9002",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
//    'Access-Control-Allow-Origin': 'http://44.201.120.76:4200/',
    'Access-Control-Allow-Origin': 'http://localhost:4200/',
  },
  paramHeaders: {
    'Content-Type': 'application/x-www-form-urlencoded',
//    'Access-Control-Allow-Origin': 'http://44.201.120.76:4200/',
    'Access-Control-Allow-Origin': 'http://localhost:4200/',
  },
};
