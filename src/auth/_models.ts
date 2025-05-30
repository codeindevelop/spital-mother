import { type TLanguageCode } from '@/i18n';

export interface AuthModel {
  data: {
    accessToken: string;
    refreshToken?: string;
    api_token: string;
  };
  user: UserModel;
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken?: string;
  api_token: string;
}

export interface UserModel {
  data: {
    user?: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      phone?: string;
      avatar?: string;
      is_active: boolean;
      is_superuser: boolean;
      is_staff: boolean;
      roles: Array<{ name: string }>;
    };

    permissions: [''];
  };

  language?: TLanguageCode;
  isAuthenticated: boolean;

  auth?: AuthModel;
}
