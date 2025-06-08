import React, { useState, useRef, useEffect } from 'react';
import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils';
import { FormikProps } from 'formik';

interface SiteImageProps {
  formik: FormikProps<any>;
}

function SiteImageBlock({ formik }: SiteImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // پایه URL سرور برای تصاویر
  // eslint-disable-next-line no-undef
  const BASE_URL = 'http://localhost:8000';

  // سینک preview با company_logo
  useEffect(() => {
    const logo = formik.values.company_logo;
    if (logo instanceof File) {
      // اگه فایل آپلود شده، از Object URL استفاده کن
      setPreview(URL.createObjectURL(logo));
    } else if (typeof logo === 'string' && logo) {
      // اگه URL سروره، URL کامل بساز
      setPreview(logo.startsWith('http') ? logo : `${BASE_URL}${logo}`);
    } else {
      // اگه null یا undefined، پیش‌نمایش رو پاک کن
      setPreview(null);
    }
    // cleanup برای Object URL
    return () => {
      if (logo instanceof File && preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [formik.values.company_logo, BASE_URL, preview]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue('company_logo', file);
      // preview توی useEffect آپدیت می‌شه
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      formik.setFieldValue('company_logo', file);
      // preview توی useEffect آپدیت می‌شه
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleRemove = () => {
    formik.setFieldValue('company_logo', null);
    // preview توی useEffect آپدیت می‌شه
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <style>
        {`
          .branding-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-5.png')}');
          }
          .dark .branding-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-5-dark.png')}');
          }
        `}
      </style>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-sm">تنظیم تصویر شرکت</h3>
        </div>
        <div className="card-body grid gap-5 justify-center items-center text-center">
          <h2 className="text-center font-bold text-md">تصویر اولیه شرکت</h2>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 w-full">
            <div className="grid grid-cols-1 items-center justify-between text-center gap-2.5 w-full">
              <p className="text-sm text-gray-700 mb-2">
                لوگوی شرکت را در اینجا آپلود کنید تا در نتایج جستجو نمایش داده شود.
              </p>
              <div className="flex flex-wrap sm:flex-nowrap gap-5 lg:gap-7.5 w-full">
                <div
                  className="flex bg-center w-full p-5 lg:p-7 bg-no-repeat bg-[length:550px] border border-gray-300 rounded-xl border-dashed branding-bg"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex flex-col place-items-center place-content-center text-center rounded-xl w-full">
                    {preview ? (
                      <div className="relative">
                        <img
                          src={preview}
                          alt="Logo Preview"
                          className="max-w-[200px] max-h-[100px] mb-2"
                        />
                        <button
                          type="button"
                          className="absolute top-0 right-0 btn btn-danger btn-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemove();
                          }}
                        >
                          <KeenIcon icon="trash" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center mb-2.5">
                          <div className="relative size-11 shrink-0">
                            <svg
                              className="w-full h-full stroke-brand-clarity fill-light"
                              width="44"
                              height="48"
                              viewBox="0 0 44 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                                fill=""
                              />
                              <path
                                d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                                stroke=""
                                strokeOpacity="0.2"
                              />
                            </svg>
                            <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                              <KeenIcon icon="picture" className="text-xl ps-px text-primary" />
                            </div>
                          </div>
                        </div>
                        <span className="text-gray-900 text-xs font-medium hover:text-primary-active mb-px">
                          کلیک یا کشیدن و رها کردن
                        </span>
                        <div className="text-2xs text-gray-700 text-nowrap gap-2.5 flex flex-col py-3">
                          <span>فرمت‌های قابل قبول: PNG, JPEG</span>
                          <span>(حداکثر سایز - ۲ مگابایت)</span>
                        </div>
                      </>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/png,image/jpeg"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              {formik.touched.company_logo && formik.errors.company_logo && (
                <div className="text-danger text-sm">{formik.errors.company_logo}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteImageBlock;
