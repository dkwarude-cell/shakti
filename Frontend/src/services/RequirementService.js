import apiClient from './axiosClient';
import { API_ENDPOINTS } from '../config/api';

class RequirementService {
  async getRequirements() {
    return apiClient.get(API_ENDPOINTS.REQUIREMENTS.LIST);
  }

  async getRequirementById(id) {
    return apiClient.get(API_ENDPOINTS.REQUIREMENTS.GET(id));
  }

  async createRequirement(data) {
    return apiClient.post(API_ENDPOINTS.REQUIREMENTS.CREATE, data);
  }

  async updateRequirement(id, data) {
    return apiClient.put(API_ENDPOINTS.REQUIREMENTS.UPDATE(id), data);
  }

  async deleteRequirement(id) {
    return apiClient.delete(API_ENDPOINTS.REQUIREMENTS.DELETE(id));
  }
}

export default new RequirementService();
