const BASE_API_URL = 'https://olu.com.ng/api';

const apiEndpoints = {
  login: () => `${BASE_API_URL}/auth/login`,
  register: () => `${BASE_API_URL}/auth/register`,
  forgotPassword: () => `${BASE_API_URL}/auth/forgot-password`,
  resetPassword: () => `${BASE_API_URL}/auth/reset-password`,
  logout: () => `${BASE_API_URL}/auth/logout`,
  getUser: () => `${BASE_API_URL}/user`,
  authMe: () => `${BASE_API_URL}/auth/me`, // Add this line
};

export { BASE_API_URL, apiEndpoints };