// src/modules/page/forms/blocks/publish/PublishMode.tsx
import { KeenIcon } from '@/components';
import { CommonHexagonBadge } from '@/partials/common';
import { useState, type MouseEvent } from 'react';
import { FormikProps } from 'formik';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import clsx from 'clsx';

interface PublishModeProps {
  formik: FormikProps<any>;
}

function PublishMode({ formik }: PublishModeProps) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const visibility = formik.values.visibility;

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">نوع انتشار</h3>
      </div>
      <div className="card-body">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <label className="form-label">امنیت</label>
            <div className="grow w-full">
              <Select
                value={visibility}
                onValueChange={(value) => {
                  formik.setFieldValue('visibility', value);
                  if (value !== 'private') {
                    formik.setFieldValue('password', '');
                    formik.setFieldValue('password_confirmation', '');
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">عمومی</SelectItem>
                  <SelectItem value="members">فقط اعضا</SelectItem>
                  <SelectItem value="private">خصوصی با رمز عبور</SelectItem>
                </SelectContent>
              </Select>
              {formik.touched.visibility &&
                formik.errors.visibility &&
                typeof formik.errors.visibility === 'string' && (
                  <div className="text-danger text-sm">{formik.errors.visibility}</div>
                )}
            </div>
          </div>
          {visibility === 'private' && (
            <>
              <hr />
              <div className="flex flex-col gap-3 justify-center items-center text-center">
                <p className="text-xs leading-6 flex justify-center items-center gap-3 w-full">
                  <CommonHexagonBadge
                    stroke="stroke-gray-300"
                    fill="fill-gray-100"
                    size="size-[50px]"
                    badge={<KeenIcon icon="lock-2" className="text-xl text-gray-500" />}
                  />
                  با فعال‌سازی محتوای خصوصی با رمز عبور، فقط کاربرانی که رمز عبور این صفحه را داشته
                  باشند امکان مشاهده محتوای صفحه را خواهند داشت
                </p>
                <label className="input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="رمز عبور"
                    autoComplete="off"
                    {...formik.getFieldProps('password')}
                    className={clsx('form-control', {
                      'is-invalid': formik.touched.password && formik.errors.password
                    })}
                  />
                  <button className="btn btn-icon" onClick={togglePassword}>
                    <KeenIcon
                      icon="eye"
                      className={clsx('text-gray-500', { hidden: showPassword })}
                    />
                    <KeenIcon
                      icon="eye-slash"
                      className={clsx('text-gray-500', { hidden: !showPassword })}
                    />
                  </button>
                </label>
                {formik.touched.password &&
                  typeof formik.errors.password === 'string' &&
                  formik.errors.password && (
                    <span role="alert" className="text-danger text-xs mt-1">
                      {formik.errors.password}
                    </span>
                  )}
                <label className="input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="تکرار رمز عبور"
                    autoComplete="off"
                    {...formik.getFieldProps('password_confirmation')}
                    className={clsx('form-control', {
                      'is-invalid':
                        formik.touched.password_confirmation && formik.errors.password_confirmation
                    })}
                  />
                  <button className="btn btn-icon" onClick={togglePassword}>
                    <KeenIcon
                      icon="eye"
                      className={clsx('text-gray-500', { hidden: showPassword })}
                    />
                    <KeenIcon
                      icon="eye-slash"
                      className={clsx('text-gray-500', { hidden: !showPassword })}
                    />
                  </button>
                </label>
                {formik.touched.password_confirmation &&
                  typeof formik.errors.password_confirmation === 'string' &&
                  formik.errors.password_confirmation && (
                    <span role="alert" className="text-danger text-xs mt-1">
                      {formik.errors.password_confirmation}
                    </span>
                  )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PublishMode;
