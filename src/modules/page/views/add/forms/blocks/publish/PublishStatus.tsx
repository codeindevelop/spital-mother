// src/modules/page/publish/PublishStatus.tsx
import { FormikProps } from 'formik';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface PublishStatusProps {
  formik: FormikProps<any>;
}

function PublishStatus({ formik }: PublishStatusProps) {
  const status = formik.values.status;

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title>text-sm">وضعیت انتشار</h3>
      </div>

      <div className="card-body">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <label className="form-label">وضعیت انتشار: </label>

            <div className="w-grow w-full">
              <Select
                value={status}
                onValueChange={(value) => {
                  formik.setFieldValue('status', value);
                  formik.setFieldValue('is_active', value === 'disabled' ? false : true);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="published">منتشر شده</SelectItem>
                  <SelectItem value="draft">پیش‌نویس</SelectItem>
                  <SelectItem value="disabled">غیرفعال</SelectItem>
                </SelectContent>
              </Select>
              {formik.touched.status &&
                formik.errors.status &&
                typeof formik.errors.status === 'string' && (
                  <div className="text-danger text-sm">{formik.errors.status}</div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishStatus;
