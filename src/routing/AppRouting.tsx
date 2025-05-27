import { ReactElement, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { useLoaders } from '@/providers';
import { AppRoutingSetup } from '.';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { createSelector } from 'reselect';
import { loadProfileAction } from '@/modules/auth/actions/profile/profileAction';
import { disableScreenLoaderAction } from '@/modules/loaders/store/screenLoader/screenLoaderReducer';
import { get } from 'http';

const AppRouting = (): ReactElement => {
  const { setProgressBarLoader } = useLoaders();

  const [loading, setLoading] = useState(true);
  const [previousLocation, setPreviousLocation] = useState('');
  const [firstLoad, setFirstLoad] = useState(true);
  const location = useLocation();
  const path = location.pathname.trim();

  const dispatch = useAppDispatch();
  const reduxStateProps = createSelector(
    (state) => state.auth,
    (auth: {
      logout: { logoutMsg: string; logoutSuc: boolean } | '';
      user: {
        isLogout: string | null;
        isAuthenticated: boolean;
        token: boolean;
      };
    }) => {
      return {
        isAuthenticated: auth.user.isAuthenticated,
        token: auth.user.token,
        logoutSuc: typeof auth.logout === 'object' ? auth.logout.logoutSuc : false
      };
    }
  );
  const { isAuthenticated, logoutSuc } = useAppSelector(reduxStateProps);

  useEffect(() => {
    if (localStorage.getItem('accessToken') != null) {
      // load profile
      dispatch(loadProfileAction());
      dispatch(disableScreenLoaderAction());
    }

    if (logoutSuc) {
      localStorage.removeItem('accessToken');
      window.location.reload();
    }
  }, [dispatch, logoutSuc]);

  useEffect(() => {
    if (firstLoad) {
      setProgressBarLoader(false);
      if (isAuthenticated) {
        dispatch(disableScreenLoaderAction());
        setFirstLoad(false);
      }
    }
  }, [dispatch, firstLoad, isAuthenticated, setProgressBarLoader]);

  useEffect(() => {
    if (!firstLoad) {
      try {
        dispatch(loadProfileAction());
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        dispatch(disableScreenLoaderAction());
      }

      setPreviousLocation(path);
      dispatch(disableScreenLoaderAction());
      if (path === previousLocation) {
        setPreviousLocation('');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (!CSS.escape(window.location.hash)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [previousLocation]);

  return <AppRoutingSetup />;
};

export { AppRouting };
