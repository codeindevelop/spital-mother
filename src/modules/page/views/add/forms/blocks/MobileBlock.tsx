import { KeenIcon } from '@/components';
import { CommonHexagonBadge } from '@/partials/common';
import React from 'react';

import { FormikProps } from 'formik';

interface MobileBlockProps {
  formik: FormikProps<any>;
}

function MobileBlock({ formik }: MobileBlockProps) {
  const enableMobile = !!formik.values.mobile_enabled;

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">فعالسازی موبایل</h3>
        <label className="switch switch-sm">
          <input
            type="checkbox"
            name="mobile_enabled"
            checked={enableMobile}
            onChange={(e) => {
              formik.setFieldValue('mobile_enabled', e.target.checked);
              if (!e.target.checked) {
                formik.setFieldValue('mobile_number', '');
                formik.setFieldValue('send_welcome_sms', false);
              }
            }}
          />
        </label>
      </div>
      <div className="card-body grid  ">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">شماره موبایل</label>
          <div className="w-full">
            <input
              className="input"
              type="text"
              name="mobile_number"
              disabled={!enableMobile}
              value={formik.values.mobile_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobile_number &&
              formik.errors.mobile_number &&
              typeof formik.errors.mobile_number === 'string' && (
                <div className="text-danger text-sm">{formik.errors.mobile_number}</div>
              )}
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-2.5 px-3.5   border border-gray-200 rounded-xl">
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-3.5">
            <CommonHexagonBadge
              stroke="stroke-gray-300"
              fill="fill-gray-100"
              size="size-[50px]"
              badge={<KeenIcon icon="message-text" className="text-xl text-gray-500" />}
            />
            <div className="flex flex-col">
              <h4 className="text-sm font-medium text-gray-900 mb-px">پیامک خوش‌آمد</h4>
              <span className="text-2sm text-gray-700">ارسال پیامک خوش‌آمد بعد از ایجاد اکانت</span>
            </div>
          </div>
          <label className="switch switch-sm">
            <input
              type="checkbox"
              name="send_welcome_sms"
              checked={formik.values.send_welcome_sms}
              onChange={formik.handleChange}
              disabled={!enableMobile}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default MobileBlock;
