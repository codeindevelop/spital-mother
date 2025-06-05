import { apiConfig } from '@/config';

const API_URL = apiConfig.API_SERVER;

/* ------------------------ Settings CRUD URLs ------------------------ */
export default {
  seoGeneralSettingUrl: `${API_URL}/api/v1/admin/seo/general`,
  addNewPageUrl: `${API_URL}/api/v1/admin/create`,
  getPageBySlugUrl: `${API_URL}/api/v1/admin/get-by-link`
};
