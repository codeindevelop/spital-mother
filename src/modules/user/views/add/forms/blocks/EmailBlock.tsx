import { KeenIcon } from '@/components';
import { CommonHexagonBadge } from '@/partials/common';
import React from 'react';
import { FormikProps } from 'formik';

interface EmailBlockProps {
  formik: FormikProps<any>;
}

function EmailBlock({ formik }: EmailBlockProps) {
  const enableEmail = !!formik.values.email_enabled;

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">فعالسازی ایمیل</h3>
        <label className="switch switch-sm">
          <input
            type="checkbox"
            name="email_enabled"
            checked={enableEmail}
            onChange={(e) => {
              formik.setFieldValue('email_enabled', e.target.checked);
              if (!e.target.checked) {
                formik.setFieldValue('email', '');
                formik.setFieldValue('send_verify_email', false);
              }
            }}
          />
        </label>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">ایمیل</label>
          <div className="w-full">
            <input
              className="input"
              type="text"
              name="email"
              disabled={!enableEmail}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger text-sm">{formik.errors.email}</div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap border border-gray-200 rounded-xl gap-2.5 px-3.5 py-2.5">
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-3.5">
            <CommonHexagonBadge
              stroke="stroke-gray-800"
              fill="fill-gray-100"
              size="size-[50px]"
              badge={<KeenIcon icon="sms" className="text-xl text-gray-500" />}
            />
            <div className="flex flex-col">
              <h4 className="text-sm font-medium text-gray-900 mb-px">ایمیل خوش‌آمد</h4>
              <span className="text-2sm text-gray-700">ارسال ایمیل خوش‌آمد بعد از ایجاد اکانت</span>
            </div>
          </div>
          <label className="switch switch-sm">
            <input
              type="checkbox"
              name="send_verify_email"
              checked={formik.values.send_verify_email}
              onChange={formik.handleChange}
              disabled={!enableEmail}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default EmailBlock;
