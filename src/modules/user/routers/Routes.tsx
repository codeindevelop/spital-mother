import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import { UsersListPage } from '@/modules/user/views/list/UsersListPage';
import { UsersDefaultPage } from '@/modules/user/views/default/UsersDefaultPage';

const UsersRouting = (): ReactElement => {
  return (
    <Routes>
      <Route path="/default" element={<UsersDefaultPage />} />

      <Route path="/list" element={<UsersListPage />} />
    </Routes>
  );
};

export { UsersRouting };
