// src/modules/page/forms/blocks/seo/ViewMode.tsx
import Box from './Box';
import { useState } from 'react';
import { FormikProps } from 'formik';

interface ViewModeProps {
  disabled: boolean;
  formik: FormikProps<any>;
}

function ViewMode({ disabled, formik }: ViewModeProps) {
  const [showMobilePreview, setShowMobilePreview] = useState(true);

  const truncateText = (text: string, maxLength: number) => {
    if (!text || text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength - 3) + '...';
  };

  const title = truncateText(formik.values.seo.meta_title || 'عنوان', 70);
  const description = truncateText(formik.values.seo.meta_description || 'توضیحات', 200); // 160 + حاشیه برای متغیرها

  return (
    <div className="w-full flex   flex-col p-col g  rounded-lg gap-5   select-none transition-all   border-all duration-300 border-2">
      <h2 className="font-bold text-sm">نحوه یهمایش صفحه در گوگل</h2>
      <div className="flex   gap-5 flex-col gap-lg:flex-row gap-lg:flex-row    lg:flex-col   justify-center items-center  ">
        <div className="  w-full flex-col     lg lg:w-full     items-center flex-wrap flex   lg:flex-nowrap gap-5">
          <div className="flex items-center w-full">
            <label className="switch   sm-sm w-full flex sm   justify-between">
              <span className="text-xs text-gray-500">
                <span className="text-gray-700 text-sm font-medium leading-6">
                  پیش‌نمایش موبایل
                </span>
              </span>
              <input
                type="checkbox"
                checked={showMobilePreview}
                disabled={disabled}
                onChange={(e) => {
                  setShowMobilePreview(e.target.checked);
                }}
              />
            </label>
          </div>
          <div className="flex items-center gap-2 w-full">
            <label className="switch switch-sm  flex w-full justify-between">
              <span className="text-xs text-gray-500">
                <span className="text-gray-700 text-sx sm font-medium leading-6">
                  پیش‌نمایش نمایشگر بزرگ
                </span>
              </span>
              <input
                type="checkbox"
                checked={!showMobilePreview}
                disabled={disabled}
                onChange={(e) => {
                  setShowMobilePreview(!e.target.checked);
                }}
              />
            </label>
          </div>
        </div>
        <Box title={title} description={description} isMobile={showMobilePreview} />
      </div>
    </div>
  );
}

export default ViewMode;
