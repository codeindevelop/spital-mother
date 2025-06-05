import { KeenIcon } from '@/components';
import { CommonHexagonBadge } from '@/partials/common';
import { FormikProps } from 'formik';

interface SitepreferencesBlockProps {
  formik: FormikProps<any>;
}

function SitepreferencesBlock({ formik }: SitepreferencesBlockProps) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-sm"> تنظیمات برگزیده</h3>
        </div>
        <div className="card-body grid gap-5">
          <div className="flex items-center justify-center md:justify-between flex-wrap  lg:flex-nowrap border border-gray-200 rounded-xl gap-2 px-3.5 py-2.5">
            <div className="flex p-2 flex-wrap lg:flex-nowrap justify-center items-center gap-3.5">
              <CommonHexagonBadge
                stroke="stroke-gray-300"
                fill="fill-gray-100"
                size="size-[50px]"
                badge={<KeenIcon icon="check-circle" className="text-xl text-gray-500" />}
              />
              <div className="flex flex-col gap-2    text-center md:text-start">
                <h4 className="text-sm font-medium text-gray-900 mb-px">
                  محدود کردن تنظیمات پیشرفته برای نویسندگان
                </h4>
                <p className="text-sm md:text-2sm text-gray-700 leading-7 me-2">
                  به طور پیش‌فرض فقط ویرایشگران و مدیران می‌توانند به بخش پیشرفته و طرحواره در نوار
                  کناری یا متاباکس تنظیمات سئو دسترسی داشته باشند. غیرفعال کردن این بخش، امکان
                  دسترسی را برای همه کاربران فراهم می‌کند.
                </p>
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
        </div>
      </div>
    </>
  );
}

export default SitepreferencesBlock;
