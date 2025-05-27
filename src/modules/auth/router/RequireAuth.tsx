import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ScreenLoader } from '@/components/loaders';

import { useState } from 'react';
import { createSelector } from 'reselect';
import { useAppSelector } from '@/store/hooks';

const RequireAuth = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const reduxStateProps = createSelector(
    (state) => state.auth,
    (auth: {
      user: {
        isAuthenticated: boolean;
      };
    }) => {
      return {
        isAuthenticated: auth.user.isAuthenticated
      };
    }
  );
  const { isAuthenticated } = useAppSelector(reduxStateProps);

  // if (loading) {
  //   return <ScreenLoader />;
  // }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export { RequireAuth };
