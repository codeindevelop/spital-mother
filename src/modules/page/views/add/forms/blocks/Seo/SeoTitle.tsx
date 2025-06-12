import React from 'react';
import { ProgressBars } from '@/components';
import { FormikProps } from 'formik';
type Props = {
  formik: FormikProps<any>;
};

function SeoTitle({ formik }: Props) {
  const getTitleProgress = (length: number) => {
    const max = 70;
    const min = 55; // حداقل پیشنهادی
    if (length > max) return { value: Math.min(length, 71), color: 'var(--tw-danger)' };
    if (length >= min && length <= max)
      return { value: Math.min(length, 70), color: 'var(--tw-success)' };
    return { value: (length / max) * 100, color: 'var(--tw-primary)' };
  };

  const getDescriptionProgress = (length: number) => {
    const max = 160;
    const min = 120; // حداقل پیشنهادی
    if (length > max) return { value: Math.min(length, 161), color: 'var(--tw-danger)' };
    if (length >= min && length <= max)
      return { value: Math.min(length, 100), color: 'var(--tw-success)' };
    return { value: (length / max) * 100, color: 'var(--tw-primary)' };
  };

  const titleLength = formik.values.meta_title?.length || 0;
  const descriptionLength = formik.values.meta_description?.length || 0;
  const titleProgress = getTitleProgress(titleLength);
  const descriptionProgress = getDescriptionProgress(descriptionLength) ?? {
    value: 0,
    color: 'var(--tw-primary)'
  };

  return (
    <>
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">نام صفحه</label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="meta_title"
            value={formik.values.seo_meta_title}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldValue('seo.meta_title', e.target.value); // همگام‌سازی با SEO
            }}
            onBlur={formik.handleBlur}
          />
          <div className="flex flex-col gap-3 mt-3">
            <ProgressBars
              theme={undefined}
              BarbackgroundColor={titleProgress.color}
              value={titleProgress.value}
              variant="determinate"
            />
            <p className="text-sm tracking-normal font-estedad text-gray-600 mt-3">
              {titleLength} / 70 کاراکتر (توصیه: 30-70 کاراکتر)
            </p>
            {titleLength > 70 && (
              <div className="text-danger text-sm">
                عنوان بیش از ۷۰ کاراکتر است و در نتایج جستجو کوتاه می‌شود.
              </div>
            )}
            {titleLength < 30 && titleLength > 0 && (
              <div className="text-danger text-sm">
                عنوان کمتر از ۳۰ کاراکتر است و ممکن است بهینه نباشد.
              </div>
            )}
            {formik.touched.meta_title &&
              formik.errors.meta_title &&
              typeof formik.errors.meta_title === 'string' && (
                <div className="text-danger text-sm">{formik.errors.meta_title}</div>
              )}
            {formik.touched.meta_title && Array.isArray(formik.errors.meta_title) && (
              <div className="text-danger text-sm">{formik.errors.meta_title.join(', ')}</div>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">توضیحات متا</label>
        <div className="w-full">
          <textarea
            className=" input leading-6 p-2 h-[120px]  "
            name="meta_description"
            value={formik.values.meta_description}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldValue('seo.meta_description', e.target.value); // همگام‌سازی با SEO
            }}
            onBlur={formik.handleBlur}
          />
          <div className="flex flex-col gap-3 mt-3">
            <ProgressBars
              theme={undefined}
              BarbackgroundColor={descriptionProgress.color}
              value={descriptionProgress.value}
              variant="determinate"
            />

            <p className="text-xs text-gray-600 mt-1">
              {descriptionLength} / 160 کاراکتر (توصیه: 80-160 کاراکتر)
            </p>
            {descriptionLength > 160 && (
              <div className="text-danger text-sm">
                توضیحات بیش از ۱۶۰ کاراکتر است و در نتایج جستجو کوتاه می‌شود.
              </div>
            )}
            {descriptionLength < 80 && descriptionLength > 0 && (
              <div className="text-danger text-sm">
                توضیحات کمتر از ۸۰ کاراکتر است و ممکن است بهینه نباشد.
              </div>
            )}
            {formik.touched.meta_description &&
              formik.errors.meta_description &&
              typeof formik.errors.meta_description === 'string' && (
                <div className="text-danger text-sm">{formik.errors.meta_description}</div>
              )}
            {formik.touched.meta_description && Array.isArray(formik.errors.meta_description) && (
              <div className="text-danger text-sm">{formik.errors.meta_description.join(', ')}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SeoTitle;
