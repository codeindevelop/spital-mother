import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import { UsersListPage } from '@/modules/user/views/list/UsersListPage';
import { UsersDefaultPage } from '@/modules/user/views/default/UsersDefaultPage';
import { AddUserPage } from '../views/add/AddUserPage';

const UsersRouting = (): ReactElement => {
  return (
    <Routes>
      <Route path="/default" element={<UsersDefaultPage />} />

      <Route path="/list" element={<UsersListPage />} />
      <Route path="/add" element={<AddUserPage />} />
    </Routes>
  );
};

export { UsersRouting };
