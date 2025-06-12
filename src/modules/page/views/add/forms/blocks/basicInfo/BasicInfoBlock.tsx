import { FormikProps } from 'formik';
import { ProgressBars } from '@/components';

interface BasicInfoBlockProps {
  formik: FormikProps<any>;
}

function BasicInfoBlock({ formik }: BasicInfoBlockProps) {
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

  const titleLength = formik.values.title?.length || 0;
  const descriptionLength = formik.values.description?.length || 0;
  const titleProgress = getTitleProgress(titleLength);
  const descriptionProgress = getDescriptionProgress(descriptionLength) ?? {
    value: 0,
    color: 'var(--tw-primary)'
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">اطلاعات پایه</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام صفحه (Meta Title)</label>
          <div className="w-full">
            <input
              className="input text-md font-estedad tracking-normal"
              type="text"
              name="title"
              value={formik.values.title}
              onChange={(e) => {
                formik.handleChange(e);
                formik.setFieldValue('title', e.target.value); // همگام‌سازی با SEO
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
              {formik.touched.title &&
                formik.errors.title &&
                typeof formik.errors.title === 'string' && (
                  <div className="text-danger text-sm">{formik.errors.title}</div>
                )}
              {formik.touched.title && Array.isArray(formik.errors.title) && (
                <div className="text-danger text-sm">{formik.errors.title.join(', ')}</div>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">توضیحات (Meta Description)</label>
          <div className="w-full">
            <textarea
              className="input leading-6 p-2 h-[120px] resize:none text-md font-estedad tracking-normal"
              name="description"
              style={{ resize: 'none' }}
              rows={5}
              draggable="false"
              value={formik.values.description}
              onChange={(e) => {
                formik.handleChange(e);
                formik.setFieldValue('seo.description', e.target.value); // همگام‌سازی با SEO
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
              {formik.touched.description &&
                formik.errors.description &&
                typeof formik.errors.description === 'string' && (
                  <div className="text-danger text-sm">{formik.errors.description}</div>
                )}
              {formik.touched.description && Array.isArray(formik.errors.description) && (
                <div className="text-danger text-sm">{formik.errors.description.join(', ')}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfoBlock;
