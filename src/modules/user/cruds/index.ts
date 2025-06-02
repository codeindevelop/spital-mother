import { apiConfig } from '@/config';

const API_URL = apiConfig.API_SERVER;

/* ------------------------ User CRUD URLs ------------------------ */
export default {
  usersListsUrl: `${API_URL}/api/v1/admin/users`,
  addNewUserUrl: `${API_URL}/api/v1/admin/create-user`
};
