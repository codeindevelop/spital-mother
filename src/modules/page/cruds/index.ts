import { apiConfig } from '@/config';

const API_URL = apiConfig.API_SERVER;

/* ------------------------ Page CRUD URLs ------------------------ */
export default {
  pagesListsUrl: `${API_URL}/api/v1/admin/page/all`,
  addNewPageUrl: `${API_URL}/api/v1/admin/create`,
  getPageBySlugUrl: `${API_URL}/api/v1/admin/get-by-link`
};
