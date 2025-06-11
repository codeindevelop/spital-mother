import { KeenIcon } from '@/components';
import { CommonHexagonBadge } from '@/partials/common';

import { FormikProps } from 'formik';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface PageLinkBlockProps {
  formik: FormikProps<any>;
}

function PageLinkBlock({ formik }: PageLinkBlockProps) {
  const enableRandomPassword = formik.values.create_password;

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">لینک صفحه</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap rounded-lg select-none transition-all duration-300 hover:shadow-lg gap-2.5 px-3.5 py-2.5 border-2">
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-3.5">
            <CommonHexagonBadge
              stroke="stroke-gray-300"
              fill="fill-gray-100"
              size="size-[50px]"
              badge={<KeenIcon icon="password-check" className="text-xl text-gray-500" />}
            />
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-medium text-gray-900 mb-px">صفحه فرزند</h4>
              <span className="text-2sm text-gray-700">
                آیا این صفحه دارای لینک والد می باشد و باید زیر مجموعه یک لینک دیگر شود ؟
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
        <div className="flex items-center flex-wrap gap-2.5">
          <label className="form-label max-w-56">آدرس لینک پدر</label>

          <div className="grow">
            <Select defaultValue="1">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Public</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">آدرس لینک</label>
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
      </div>
    </div>
  );
}

export default PageLinkBlock;
