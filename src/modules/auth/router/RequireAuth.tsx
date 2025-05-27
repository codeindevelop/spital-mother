import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ScreenLoader } from '@/components/loaders';

import { createSelector } from 'reselect';
import { useAppSelector } from '@/store/hooks';

const RequireAuth = () => {
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
  const reduxLoaderProps = createSelector(
    (state) => state.loader,
    (loader: { loader: boolean }) => {
      return {
        loading: loader.loader
      };
    }
  );
  const { loading } = useAppSelector(reduxLoaderProps);

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
