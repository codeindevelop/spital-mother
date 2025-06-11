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
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">وضعیت انتشار</h3>
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
        </div>
      </div>
    </div>
  );
}

export default PublishStatus;
