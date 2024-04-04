import { jwtDecode as decode } from "jwt-decode";

export const getToken = (): string | null => {
  return localStorage.getItem("id_token");
};

export const loggedIn = (): boolean => {
  const token = getToken();
  return !!token && !isTokenExpired(token);
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = decode(token);
    if (decoded.exp === undefined) return false;
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
};

export const login = (idToken: string): void => {
  localStorage.setItem("id_token", idToken);
  window.location.assign("/");
};

export const logout = (): void => {
  localStorage.removeItem("id_token");
  window.location.assign("/login");
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};

export const Auth = {
  getToken,
  loggedIn,
  isTokenExpired,
  login,
  logout,
  isAuthenticated,
};
