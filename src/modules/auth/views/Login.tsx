import { type MouseEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils';

import { useLayout } from '@/providers';
import { Alert } from '@/components';
import { FormattedMessage } from 'react-intl';
import { useTranslate } from '@/hooks/useTranslate';
import { useAuthContext } from '../providers/useAuthContext';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('فرمت نوشتاری ایمیل اشتباه است')
    .min(3, 'حداقل 3 کاراکتر')
    .max(50, 'حداکثر 50 کاراکتر')
    .required('ایمیل الزامی است'),
  password: Yup.string()
    .min(3, 'حداقل 3 کاراکتر')
    .max(50, 'حداکثر 50 کاراکتر')
    .required('رمز عبور الزامی است'),
  remember: Yup.boolean()
});

const initialValues = {
  email: 'superadmin@abrebase.com',
  password: 'supersuper',
  remember: false
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [showPassword, setShowPassword] = useState(false);
  const { currentLayout } = useLayout();

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);

      try {
        if (!login) {
          throw new Error(' خطایی در سامانه به وجود امده لطفا چند دقیقه دیگر مجدد امتحان نمایید');
        }

        await login(values.email, values.password);

        if (values.remember) {
          localStorage.setItem('email', values.email);
        } else {
          localStorage.removeItem('email');
        }

        navigate(from, { replace: true });
      } catch {
        setStatus(
          <>
            <p className="text-center text-md text-danger font-bold">
              اطلاعات وارد شده صحیح نمی باشد<br></br>
              <span className="py-2 font-azar text-md font-medium">
                در صورتی که رمز عبور خود را فراموش کرده این از بخش فراموشی رمز عبور اقدام به بازیابی
                آن نمایید
              </span>
            </p>
          </>
        );
        setSubmitting(false);
      }
      setLoading(false);
    }
  });

  const togglePassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="card max-w-[390px] w-full">
      <form
        className="card-body flex flex-col gap-5 p-10"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <div className="text-center mb-2.5">
          <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">
            <FormattedMessage id="AUTH.SIGNIN" />
          </h3>
          <div className="flex items-center justify-center font-medium">
            <span className="text-2sm text-gray-600 me-1.5">
              <FormattedMessage id="AUTH.SIGNUP_NEED" />
            </span>
            <Link
              to={currentLayout?.name === 'auth-branded' ? '/auth/signup' : '/auth/classic/signup'}
              className="text-2sm link"
            >
              <FormattedMessage id="AUTH.SIGNUP_BTN" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <a href="#" className="btn btn-light btn-sm justify-center">
            <img src={toAbsoluteUrl('/media/brand-logos/google.svg')} className="size-4 shrink-0" />

            <FormattedMessage id="AUTH.SIGNIN_GOOGLE" />
          </a>

          <a href="#" className="btn btn-light btn-sm justify-center">
            <img
              src={toAbsoluteUrl('/media/brand-logos/twitter-2.svg')}
              className="size-4 shrink-0  "
            />

            <FormattedMessage id="AUTH.SIGNIN_TWITTER" />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="border-t border-gray-200 w-full"></span>
          <span className="text-2xs text-gray-500 font-medium uppercase">
            <FormattedMessage id="AUTH.SIGNIN_OR" />
          </span>
          <span className="border-t border-gray-200 w-full"></span>
        </div>
        {/* 
        <Alert variant="primary">
          Use <span className="font-semibold text-gray-900">demo@keenthemes.com</span> username and{' '}
          <span className="font-semibold text-gray-900">demo1234</span> password.
        </Alert> */}

        {formik.status && (
          <Alert className=" font-azarmehr " variant="danger">
            {formik.status}
          </Alert>
        )}

        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">
            <FormattedMessage id="AUTH.SIGNIN_EMAIL" />
          </label>
          <label className="input">
            <input
              placeholder={useTranslate('AUTH.SIGNIN_ENTER_EMAIL')}
              autoComplete="off"
              {...formik.getFieldProps('email')}
              className={clsx('form-control', {
                'is-invalid': formik.touched.email && formik.errors.email
              })}
            />
          </label>
          {formik.touched.email && formik.errors.email && (
            <span role="alert" className="text-danger text-xs mt-1">
              {formik.errors.email}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-1">
            <label className="form-label text-gray-900">
              <FormattedMessage id="AUTH.SIGNIN_PASSWORD" />
            </label>
            <Link
              to={
                currentLayout?.name === 'auth-branded'
                  ? '/auth/reset-password'
                  : '/auth/classic/reset-password'
              }
              className="text-2sm link shrink-0"
            >
              <FormattedMessage id="AUTH.SIGNIN_FORGOT_PASSWORD" />
            </Link>
          </div>
          <label className="input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder={useTranslate('AUTH.SIGNIN_ENTER_PASSWORD')}
              autoComplete="off"
              {...formik.getFieldProps('password')}
              className={clsx('form-control', {
                'is-invalid': formik.touched.password && formik.errors.password
              })}
            />
            <button className="btn btn-icon" onClick={togglePassword}>
              <KeenIcon icon="eye" className={clsx('text-gray-500', { hidden: showPassword })} />
              <KeenIcon
                icon="eye-slash"
                className={clsx('text-gray-500', { hidden: !showPassword })}
              />
            </button>
          </label>
          {formik.touched.password && formik.errors.password && (
            <span role="alert" className="text-danger text-xs mt-1">
              {formik.errors.password}
            </span>
          )}
        </div>

        <label className="checkbox-group">
          <input
            className="checkbox checkbox-sm"
            type="checkbox"
            {...formik.getFieldProps('remember')}
          />
          <span className="checkbox-label">
            <FormattedMessage id="AUTH.SIGNIN_REMEMBER_ME" />
          </span>
        </label>

        <button
          type="submit"
          className="btn btn-primary flex justify-center grow"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {loading ? 'لطفا صبر کنید...' : 'ورود'}
        </button>
      </form>
    </div>
  );
};

export { Login };
