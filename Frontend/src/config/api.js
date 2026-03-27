const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    DONOR_SIGNUP: `${API_BASE_URL}/auth/donor/sign-up`,
    DONOR_SIGNIN: `${API_BASE_URL}/auth/donor/sign-in`,
    INSTITUTE_SIGNUP: `${API_BASE_URL}/auth/institute/sign-up`,
    INSTITUTE_SIGNIN: `${API_BASE_URL}/auth/institute/sign-in`,
    SUPPLIER_SIGNUP: `${API_BASE_URL}/auth/supplier/sign-up`,
    SUPPLIER_SIGNIN: `${API_BASE_URL}/auth/supplier/sign-in`,
  },
  // Requirement endpoints
  REQUIREMENTS: {
    LIST: `${API_BASE_URL}/requirements`,
    GET: (id) => `${API_BASE_URL}/requirements/${id}`,
    CREATE: `${API_BASE_URL}/requirements`,
    UPDATE: (id) => `${API_BASE_URL}/requirements/${id}`,
    DELETE: (id) => `${API_BASE_URL}/requirements/${id}`,
  },
  // Donation endpoints
  DONATIONS: {
    LIST: `${API_BASE_URL}/donations`,
    CREATE: `${API_BASE_URL}/donations`,
    GET_BY_USER: `${API_BASE_URL}/donations/user`,
  },
  // Supplier Product endpoints
  SUPPLIER_PRODUCTS: {
    LIST: `${API_BASE_URL}/supplier-products`,
    GET: (id) => `${API_BASE_URL}/supplier-products/${id}`,
    CREATE: `${API_BASE_URL}/supplier-products`,
    UPDATE: (id) => `${API_BASE_URL}/supplier-products/${id}`,
    DELETE: (id) => `${API_BASE_URL}/supplier-products/${id}`,
  },
};

export default API_BASE_URL;
