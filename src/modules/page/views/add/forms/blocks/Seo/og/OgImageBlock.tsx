import React, { useState } from 'react';
import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils';
import { FormikProps } from 'formik';
import axios from 'axios';
import { toast } from 'sonner';
import cruds from '@/modules/page/cruds';
interface SiteImageProps {
  formik: FormikProps<any>;
}

function OgImageBlock({ formik }: SiteImageProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const validateImage = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width > 800 || img.height > 400) {
          toast.error('ابعاد تصویر باید حداکثر ۸۰۰x۴۰۰ باشد.');
          resolve(false);
        } else if (!['image/jpeg', 'image/png'].includes(file.type)) {
          toast.error('فقط فرمت‌های JPEG و PNG مجاز هستند.');
          resolve(false);
        } else {
          resolve(true);
        }
      };
      img.onerror = () => {
        toast.error('خطا در بارگذاری تصویر.');
        resolve(false);
      };
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    const isValid = await validateImage(file);
    if (!isValid) return;

    // پیش‌نمایش تصویر
    const reader = new FileReader();
    reader.onload = () => setPreviewImage(reader.result as string);
    reader.readAsDataURL(file);

    // آپلود به سرور
    setUploading(true);
    try {
      const token = localStorage.getItem('accessToken');
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post(cruds.uploadSeoImageUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      const imageUrl = response.data.url;
      formik.setFieldValue('seo.og_image', imageUrl);
      toast.success('تصویر با موفقیت آپلود شد.');
    } catch (error) {
      toast.error('خطا در آپلود تصویر.');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    formik.setFieldValue('seo.og_image', '');
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

      <div className="card-body grid gap-5 justify-center items-center text-center">
        <h2 className="text-start font-bold text-md">تصویر سوشال</h2>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 w-full">
          <div className="grid grid-cols-1 items-center justify-between text-start gap-2.5">
            <p className="text-sm text-gray-700 mb-2 leading-6">
              این تصویر زمانی که لینک صفحه را در شبکه‌های اجتماعی به اشتراک می‌گذارید، نمایش داده
              می‌شود.
            </p>
            {(previewImage || formik.values.seo.og_image) && (
              <div className="flex flex-col items-center">
                <img
                  src={previewImage || formik.values.seo.og_image}
                  alt="OG Preview"
                  className="img-thumbnail mb-2 mx-auto rounded-lg"
                  style={{ maxWidth: '150px' }}
                />
                <button
                  type="button"
                  className="btn btn-danger btn-sm mt-2"
                  onClick={handleRemoveImage}
                  disabled={uploading}
                >
                  حذف تصویر
                </button>
              </div>
            )}
            <div className="flex bg-center w-full p-5 lg:p-7 bg-no-repeat bg-[length:550px] border border-gray-300 rounded-xl border-dashed branding-bg">
              <div className="flex flex-col place-items-center place-content-center text-center rounded-xl w-full">
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
                  <span>فرمت‌های قابل قبول: PNG, JPG</span>
                  <span>(حداکثر سایز - 800x400)</span>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/jpeg,image/png"
                  onChange={handleFileChange}
                  id="og_image"
                  disabled={uploading}
                />
                <label htmlFor="og_image" className="cursor-pointer">
                  <span className="btn btn-primary btn-sm">
                    {uploading ? 'در حال آپلود...' : 'انتخاب فایل'}
                  </span>
                </label>
              </div>
            </div>
            {typeof formik.touched.seo === 'object' &&
              !Array.isArray(formik.touched.seo) &&
              (formik.touched.seo as any)?.og_image &&
              typeof formik.errors.seo === 'object' &&
              !Array.isArray(formik.errors.seo) &&
              (formik.errors.seo as any)?.og_image && (
                <div className="text-danger text-sm">{(formik.errors.seo as any).og_image}</div>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OgImageBlock;
