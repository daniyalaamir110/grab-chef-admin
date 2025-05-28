import * as jwt from 'jwt-decode';

export const isTokenExpired = (token: string | undefined | null) => {
  if (!token) return true;
  try {
    const decodedToken = jwt.jwtDecode(token) as { exp: number };
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};
