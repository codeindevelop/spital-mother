import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { KeenIcon } from '@/components';
import { Link } from 'react-router-dom';
import MobileBlock from './blocks/MobileBlock';
import EmailBlock from './blocks/EmailBlock';
import PasswordBlock from './blocks/PasswordBlock';
import UserInfoBlock from './blocks/UserInfoBlock';
import ActiveProfileBlock from './blocks/ActiveProfileBlock';
import { useFormik } from 'formik';
import addNewUserAction from '@/modules/user/actions/create/addNewUserAction';
import { addNewUserSchema } from './schema/addNewUserSchema';

const initialValues = {
  user_name: '',
  first_name: '',
  last_name: '',
  gender: 'male',
  mobile_number: '',
  email: '',
  password: '',
  password_confirmation: '',
  send_verify_email: false,
  send_welcome_sms: false,
  active: true,
  create_password: true
};

const AddUserForm = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: addNewUserSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        // ارسال داده‌ها به اکشن
        await dispatch(addNewUserAction(values)).unwrap();
        setSubmitting(false);
        setStatus({ type: 'success', message: 'کاربر با موفقیت ایجاد شد.' });
      } catch (error: any) {
        setStatus({
          type: 'error',
          message: error.message || 'خطایی در ایجاد کاربر رخ داد.'
        });
        setSubmitting(false);
      }
      setLoading(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      {formik.status && (
        <div
          className={`text-center text-md font-bold ${
            formik.status.type === 'error' ? 'text-danger' : 'text-success'
          }`}
        >
          {formik.status.message}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        <div className="col-span-1 lg:col-span-2 gap-5 grid">
          <UserInfoBlock formik={formik} />
          <PasswordBlock formik={formik} />
        </div>
        <div className="col-span-1 gap-5 grid">
          <MobileBlock formik={formik} />
          <EmailBlock formik={formik} />
          <ActiveProfileBlock formik={formik} />
        </div>
      </div>
      <hr />
      <div className="my-5 flex flex-col md:flex-row items-center justify-start gap-2 w-full">
        <button
          type="submit"
          className="btn btn-primary w-full lg:w-1/5 flex items-center justify-center"
          disabled={loading || formik.isSubmitting}
        >
          <KeenIcon icon="save" className="text-white me-2" />
          <span>{loading ? 'در حال ارسال...' : 'ذخیره'}</span>
        </button>
        <Link
          to="/user/list"
          className="btn btn-light w-full lg:w-auto flex items-center justify-center"
        >
          <span>لغو</span>
        </Link>
      </div>
    </form>
  );
};

export { AddUserForm };
