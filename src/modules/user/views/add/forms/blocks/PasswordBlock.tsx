import { KeenIcon } from '@/components';
import { CommonHexagonBadge } from '@/partials/common';
import React from 'react';
import { FormikProps } from 'formik';

interface PasswordBlockProps {
  formik: FormikProps<any>;
}

function PasswordBlock({ formik }: PasswordBlockProps) {
  const enableRandomPassword = formik.values.create_password;

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">رمز عبور</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-2.5 px-3.5 py-2.5 border">
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-3.5">
            <CommonHexagonBadge
              stroke="stroke-gray-300"
              fill="fill-gray-100"
              size="size-[50px]"
              badge={<KeenIcon icon="password-check" className="text-xl text-gray-500" />}
            />
            <div className="flex flex-col">
              <h4 className="text-sm font-medium text-gray-900 mb-px">رمز عبور تصادفی</h4>
              <span className="text-2sm text-gray-700">
                رمز عبور تصادفی به صورت خودکار ایجاد می‌شود
              </span>
            </div>
          </div>
          <label className="switch switch-sm">
            <input
              type="checkbox"
              name="create_password"
              checked={enableRandomPassword}
              onChange={(e) => {
                formik.setFieldValue('create_password', e.target.checked);
                if (e.target.checked) {
                  // حذف فیلدهای password و password_confirmation
                  formik.setFieldValue('password', undefined);
                  formik.setFieldValue('password_confirmation', undefined);
                }
              }}
            />
          </label>
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">رمز عبور</label>
          <div className="w-full">
            <input
              className="input"
              type="password"
              name="password"
              disabled={enableRandomPassword}
              value={formik.values.password || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && typeof formik.errors.password === 'string' && (
              <div className="text-danger text-sm">{formik.errors.password}</div>
            )}
          </div>
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">تکرار رمز عبور</label>
          <div className="w-full">
            <input
              className="input"
              type="password"
              name="password_confirmation"
              disabled={enableRandomPassword}
              value={formik.values.password_confirmation || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password_confirmation &&
              typeof formik.errors.password_confirmation === 'string' && (
                <div className="text-danger text-sm">{formik.errors.password_confirmation}</div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordBlock;
