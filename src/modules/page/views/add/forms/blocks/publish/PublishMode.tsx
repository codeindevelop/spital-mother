import { KeenIcon } from '@/components';
import { CommonHexagonBadge } from '@/partials/common';
import { type MouseEvent, useState } from 'react';
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

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">نوع انتشار</h3>
      </div>
      <div className="card-body ">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <label className="form-label  ">امنیت</label>

            <div className="grow w-full">
              <Select defaultValue="3">
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">عمومی</SelectItem>
                  <SelectItem value="2">فقط اعضا</SelectItem>
                  <SelectItem value="1">محتوا خصوصی با رمزعبور</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <hr />
          <div className="flex  flex-col gap-3 justify-center items-center text-center">
            <p className="text-xs leading-6 flex justify-center items-center gap-3 w-full">
              <CommonHexagonBadge
                stroke="stroke-gray-300"
                fill="fill-gray-100"
                size="size-[50px]"
                badge={<KeenIcon icon="security ki-lock-2" className="text-xl text-gray-500" />}
              />
              با فعالسازی محتوای خصوصی با رمز عبور فقط کاربرانی که رمز عبور این صفحه را داشته باشند
              امکان مشاهده محتوای صفحه را خواهند داشت
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
            <label className="input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="تکرار رمز عبور"
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
        </div>
      </div>
    </div>
  );
}

export default PublishMode;
