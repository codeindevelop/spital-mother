import { config } from '@/config';

const API_URL = config.API_SERVER;

/* ------------------------ Organization CRUD URLs ------------------------ */
export default {
	loadOrganizationUrl: `${API_URL}/api/v1/user/my-organ`,
};
