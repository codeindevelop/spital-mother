import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import { SettingsDefaultPage } from '../views/default';

const SettingsRouting = (): ReactElement => {
  return (
    <Routes>
      <Route path="/default" element={<SettingsDefaultPage />} />

      {/* <Route path="/list" element={<UsersListPage />} /> */}
      {/* <Route path="/add" element={<CrateNewPage />} /> */}
      {/* <Route path="/show/*" element={<ShowUserPage />} /> */}
    </Routes>
  );
};

export { SettingsRouting };
