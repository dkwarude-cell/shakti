import apiClient from './axiosClient';
import { API_ENDPOINTS } from '../config/api';

class AuthService {
  async donorSignUp(data) {
    return apiClient.post(API_ENDPOINTS.AUTH.DONOR_SIGNUP, data);
  }

  async donorSignIn(data) {
    return apiClient.post(API_ENDPOINTS.AUTH.DONOR_SIGNIN, data);
  }

  async instituteSignUp(data) {
    return apiClient.post(API_ENDPOINTS.AUTH.INSTITUTE_SIGNUP, data);
  }

  async instituteSignIn(data) {
    return apiClient.post(API_ENDPOINTS.AUTH.INSTITUTE_SIGNIN, data);
  }

  async supplierSignUp(data) {
    return apiClient.post(API_ENDPOINTS.AUTH.SUPPLIER_SIGNUP, data);
  }

  async supplierSignIn(data) {
    return apiClient.post(API_ENDPOINTS.AUTH.SUPPLIER_SIGNIN, data);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setUser(user, role) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', role);
  }

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getRole() {
    return localStorage.getItem('role');
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}

export default new AuthService();
