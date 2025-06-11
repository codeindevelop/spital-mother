import { KeenIcon } from '@/components';
import { CommonHexagonBadge } from '@/partials/common';
import { type MouseEvent, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { FormikProps } from 'formik';

import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns-jalali';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import clsx from 'clsx';
import { cn } from '@/lib/utils';

interface PublishPageModeBlockProps {
  formik: FormikProps<any>;
}

function PublishPageModeBlock({ formik }: PublishPageModeBlockProps) {
  const [date, setDate] = useState<Date | undefined>();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">وضعیت نمایش و انتشار</h3>
      </div>
      <div className="card-body ">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <label className="form-label  "> وضعیت انتشار</label>

            <div className="grow w-full">
              <Select defaultValue="1">
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">منتشر شده</SelectItem>
                  <SelectItem value="2">پیش نویس</SelectItem>
                  <SelectItem value="3">غیرفعال</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
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

          <hr className="my-2" />

          <p className="text-xs leading-6 flex justify-center items-center gap-3 w-full">
            <CommonHexagonBadge
              stroke="stroke-gray-300"
              fill="fill-gray-100"
              size="size-[50px]"
              badge={<KeenIcon icon="time" className="text-xl text-gray-500" />}
            />
            با غیر فعال سازی این گزینه ، شما میتوانید یک تاریخ برای نمایش صفحه انتخاب کنید تا در آن
            تاریخ صفحه منتشر گردد
          </p>
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap rounded-lg select-none transition-all duration-300 hover:shadow-lg gap-2.5 px-3.5 py-2.5 border-2">
            <div className="flex items-center flex-wrap lg:flex-nowrap gap-3.5">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium text-gray-900 mb-px">زمان انتشار</h4>
                <span className="text-2sm text-gray-700">
                  میخواهم همین الان این صفحه منتشر شود .
                </span>
              </div>
            </div>
            <label className="switch switch-sm">
              <input
                type="checkbox"
                name="create_password"
                // checked={enableRandomPassword}
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

          <div className="w-full">
            <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
              <label className="form-label flex items-center gap-1 max-w-56">تاریخ انتشار</label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    id="date"
                    disabled
                    className={cn(
                      'input data-[state=open]:border-primary font-estedad text-center rtl',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <KeenIcon icon="calendar" className="-ms-0.5" />
                    {date ? format(date, 'LLLL dd, y') : <span>انتخاب تاریخ</span>}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="single" // Single date selection
                    defaultMonth={date}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={1}
                    // footer={`Selected: ${dateLib.format(date)}`}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishPageModeBlock;
