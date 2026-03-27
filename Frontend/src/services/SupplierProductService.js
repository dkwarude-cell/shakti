import apiClient from './axiosClient';
import { API_ENDPOINTS } from '../config/api';

class SupplierProductService {
  async getProducts() {
    return apiClient.get(API_ENDPOINTS.SUPPLIER_PRODUCTS.LIST);
  }

  async getProductById(id) {
    return apiClient.get(API_ENDPOINTS.SUPPLIER_PRODUCTS.GET(id));
  }

  async createProduct(data) {
    return apiClient.post(API_ENDPOINTS.SUPPLIER_PRODUCTS.CREATE, data);
  }

  async updateProduct(id, data) {
    return apiClient.put(API_ENDPOINTS.SUPPLIER_PRODUCTS.UPDATE(id), data);
  }

  async deleteProduct(id) {
    return apiClient.delete(API_ENDPOINTS.SUPPLIER_PRODUCTS.DELETE(id));
  }
}

export default new SupplierProductService();
