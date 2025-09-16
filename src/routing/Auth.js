// Auth.js
let isAuthenticated = false;

export const login = (callback) => {
  isAuthenticated = true;
  callback();
};

export const logout = (callback) => {
  isAuthenticated = false;
  callback();
};

export const Auth = () => isAuthenticated;