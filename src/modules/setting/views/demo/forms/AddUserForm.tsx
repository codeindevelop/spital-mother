import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getAllUsersAction } from '@/modules/user/actions/users/getAllUsersAction';

const AddUserForm = () => {
  const dispatch = useAppDispatch();
  // Fetch all users data when the component mounts
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  // Select users from Redux state
  const UsersData: any = useAppSelector((state) => state.users.users.users);

  return (
    <>
      <h2>form</h2>
    </>
  );
};

export { AddUserForm };
