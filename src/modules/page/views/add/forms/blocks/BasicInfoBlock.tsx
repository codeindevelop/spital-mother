// @ts-nocheck
import { CrudAvatarUpload } from '@/partials/crud/CrudAvatarUpload';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { FormikProps } from 'formik';
import { Textarea } from '@/components/ui/textarea';

interface BasicInfoBlockProps {
  formik: FormikProps<any>;
}

function BasicInfoBlock({ formik }: BasicInfoBlockProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">اطلاعات پایه</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام صفحه</label>
          <div className="w-full">
            <input
              className="input"
              type="text"
              name="user_name"
              value={formik.values.user_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.user_name &&
              formik.errors.user_name &&
              typeof formik.errors.user_name === 'string' && (
                <div className="text-danger text-sm">{formik.errors.user_name}</div>
              )}
            {formik.touched.user_name && Array.isArray(formik.errors.user_name) && (
              <div className="text-danger text-sm">{formik.errors.user_name.join(', ')}</div>
            )}
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">توضیحات</label>
          <div className="w-full">
            <textarea
              className=" input leading-6 p-2 h-[120px]  "
              type="text"
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.first_name && formik.errors.first_name && (
              <div className="text-danger text-sm">{formik.errors.first_name}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfoBlock;
