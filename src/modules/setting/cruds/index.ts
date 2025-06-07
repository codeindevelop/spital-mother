import { apiConfig } from '@/config';

const API_URL = apiConfig.API_SERVER;

/* ------------------------ Settings CRUD URLs ------------------------ */
export default {
  seoGeneralSettingUrl: `${API_URL}/api/v1/admin/setting/seo/general`
};
