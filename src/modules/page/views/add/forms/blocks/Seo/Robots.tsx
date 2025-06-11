import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
type Props = {
  formik: any;
};

function Robots({ formik }: Props) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <p className="font-medium text-sm text-gray-800">
          موتورهای جستجو و ربات های جستجو نسبت به محتوای این صفحه تمایل دارید چه نوع رفتاری نمایش
          دهند را انتخاب کنید
        </p>
        <div className="flex items-center flex-wrap gap-2.5">
          <label className="form-label max-w-56">موتورهای جستجو این صفحه را نمایش دهند ؟</label>

          <div className="grow">
            <Select defaultValue="index">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="index">در جستجوها نمایش داده شود</SelectItem>
                <SelectItem value="noindex">در جستجو ها نمایش داده نشود</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <hr />
        <div className="flex items-center flex-wrap gap-2.5">
          <label className="form-label max-w-56">موتورهای جستجو این صفحه را دنبال کنند ؟</label>

          <div className="grow">
            <Select defaultValue="follow">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="follow"> صفحه همیشه دنبال شود</SelectItem>
                <SelectItem value="nofollow">صفحه هیچ وقت دنبال نشود</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>{' '}
      </div>
    </>
  );
}

export default Robots;
