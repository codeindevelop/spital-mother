import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getUserAction } from '../../actions/show/getUserAction';
import ShowEditUserForm from './forms/ShowEditUserForm';

const ShowUserPageContent = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id');

  useEffect(() => {
    // You can dispatch an action to fetch user details here if needed

    dispatch(getUserAction(userId));
  }, [dispatch, userId]);

  const loading: any = useAppSelector((state) => state.users.show.loading);
  const error: any = useAppSelector((state) => state.users.show.error);
  return (
    <>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <ShowEditUserForm />
      )}
      {/* <ShowEditUserForm /> */}

      {/* <AddUserForm /> */}
    </>
  );
};

export { ShowUserPageContent };
