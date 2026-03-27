import apiClient from './axiosClient';
import { API_ENDPOINTS } from '../config/api';

class DonationService {
  async getDonations() {
    return apiClient.get(API_ENDPOINTS.DONATIONS.LIST);
  }

  async getUserDonations() {
    return apiClient.get(API_ENDPOINTS.DONATIONS.GET_BY_USER);
  }

  async createDonation(data) {
    return apiClient.post(API_ENDPOINTS.DONATIONS.CREATE, data);
  }
}

export default new DonationService();
