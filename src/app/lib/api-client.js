"use client";

import axios from "axios";
import { apiEndpoints, BASE_API_URL } from "./api-endpoints";

export const apiClient = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: false, // Ensure cookies are sent with requests
});

export const login = (credentials) =>
  apiClient.post(apiEndpoints.login(), credentials);
export const register = (data) => apiClient.post(apiEndpoints.register(), data);
export const forgotPassword = (email) =>
  apiClient.post(apiEndpoints.forgotPassword(), { email });
export const resetPassword = (data) =>
  apiClient.post(apiEndpoints.resetPassword(), data);
export const logout = () => apiClient.post(apiEndpoints.logout());
export const getUser = () => apiClient.get(apiEndpoints.getUser());
export const authMe = () => apiClient.post(apiEndpoints.authMe()); // Add this line
