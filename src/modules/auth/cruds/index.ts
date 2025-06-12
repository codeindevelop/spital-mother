import { apiConfig } from '@/config';

const API_URL = apiConfig.API_SERVER;

/* ------------------------ User CRUD URLs ------------------------ */
export default {
  getUserAdminByIdUrl: `${API_URL}/api/v1/admin/profile`
};
