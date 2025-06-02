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

interface UserInfoBlockProps {
  formik: FormikProps<any>;
}

function UserInfoBlock({ formik }: UserInfoBlockProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">اطلاعات پایه</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">تصویر پروفایل</label>
          <div className="flex items-center justify-between flex-wrap grow gap-2.5">
            <span className="text-2sm font-medium text-gray-600">150x150px JPEG, PNG Image</span>
            <CrudAvatarUpload
              onChange={(file: any) => formik.setFieldValue('avatar', file)}
              value={formik.values.avatar}
            />
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام کاربری</label>
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
          <label className="form-label max-w-56">نام</label>
          <div className="w-full">
            <input
              className="input"
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
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام خانوادگی</label>
          <div className="w-full">
            <input
              className="input"
              type="text"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.last_name && formik.errors.last_name && (
              <div className="text-danger text-sm">{formik.errors.last_name}</div>
            )}
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">جنسیت</label>
          <Select
            name="gender"
            value={formik.values.gender}
            onValueChange={(value) => formik.setFieldValue('gender', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="جنسیت" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">مرد</SelectItem>
              <SelectItem value="female">زن</SelectItem>
              <SelectItem value="other">دیگر</SelectItem>
            </SelectContent>
          </Select>
          {formik.touched.gender && formik.errors.gender && (
            <div className="text-danger text-sm">{formik.errors.gender}</div>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default UserInfoBlock;
