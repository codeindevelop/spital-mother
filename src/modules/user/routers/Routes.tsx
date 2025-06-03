import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import { UsersListPage } from '@/modules/user/views/list/UsersListPage';
import { UsersDefaultPage } from '@/modules/user/views/default/UsersDefaultPage';
import { AddUserPage } from '../views/add/AddUserPage';
import { ShowUserPage } from '../views/show/ShowUserPage';

const UsersRouting = (): ReactElement => {
  return (
    <Routes>
      <Route path="/default" element={<UsersDefaultPage />} />

      <Route path="/list" element={<UsersListPage />} />
      <Route path="/add" element={<AddUserPage />} />
      <Route path="/show/*" element={<ShowUserPage />} />
    </Routes>
  );
};

export { UsersRouting };
