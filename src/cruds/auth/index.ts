import { apiConfig } from '@/config/api.config';

const API_URL = apiConfig.API_SERVER;

/* ------------------------ Authentication CRUD URLs ------------------------ */
const authCrudUrls: any = {
  /* ------------------------------ ADMIN Urls ----------------------------- */

  loginWithEmailUrl: `${API_URL}/api/v1/admin/login-managers`,
  signupWithEmailUrl: `${API_URL}/api/v1/user/signup`,
  checkOrganizationEmailUrl: `${API_URL}/api/v1/user/check-organization`,

  loginWithSmsUrl: `${API_URL}/api/v1/user/login`,
  signupWithSmsUrl: `${API_URL}/api/v1/logout`,
  confirmOtpSignupUrl: `${API_URL}/api/v1/logout`,

  profileUrl: `${API_URL}/api/v1/user/profile`,
  logoutUrl: `${API_URL}/api/v1/user/logout`
};

export { authCrudUrls as authUrls };
export type AuthUrls = typeof authCrudUrls;
