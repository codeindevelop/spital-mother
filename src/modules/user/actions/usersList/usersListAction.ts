import axios from 'axios';
import cruds from '../../cruds';
import { UsersModel } from '../../models/_models';

// Get token from localstorage
const token = localStorage.getItem('accessToken');

export const getAllUsers = async () => {
  return await axios.get<UsersModel>(cruds.usersListsUrl, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
};
