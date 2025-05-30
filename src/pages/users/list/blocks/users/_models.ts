// import { type TLanguageCode } from '@/i18n';

// export interface AuthModel {
//   data: {
//     accessToken: string;
//     refreshToken?: string;
//     api_token: string;
//   };
//   user: UserModel;
//   isAuthenticated: boolean;
//   accessToken: string;
//   refreshToken?: string;
//   api_token: string;
// }

export interface UsersModel {
  data: {
    users?: {
      id: string;
    };

    permissions: [''];
  };
}
