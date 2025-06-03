import { KeenIcon } from '@/components';
import { CommonHexagonBadge } from '@/partials/common';
import React from 'react';

import { FormikProps } from 'formik';

interface ActiveProfileBlockProps {
  formik: FormikProps<any>;
}

function ActiveProfileBlock({ formik }: ActiveProfileBlockProps) {
  return (
    <div className="flex items-center justify-between flex-wrap lg:flex-nowrap border border-gray-200 rounded-xl gap-2 px-3.5 py-2.5">
      <div className="flex items-center flex-wrap lg:flex-nowrap gap-3.5">
        <CommonHexagonBadge
          stroke="stroke-gray-300"
          fill="fill-gray-100"
          size="size-[50px]"
          badge={<KeenIcon icon="check-circle" className="text-xl text-gray-500" />}
        />
        <div className="flex flex-col">
          <h4 className="text-sm font-medium text-gray-900 mb-px">وضعیت حساب</h4>
          <span className="text-2sm text-gray-700">حساب کاربری فعال باشد بعد از ایجاد آن؟</span>
        </div>
      </div>
      <label className="switch switch-sm">
        <input
          type="checkbox"
          name="active"
          checked={formik.values.active}
          onChange={formik.handleChange}
        />
      </label>
    </div>
  );
}

export default ActiveProfileBlock;
