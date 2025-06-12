export interface UsersModel {
  data: {
    users: {
      data: any;
      id: string;
      first_name: string;
      last_name: string;
      email: string;

      roles: {
        uuid: string;
        name: string;
      }[];
      active: boolean;
      created_at: string;
    }[];
  };
}
