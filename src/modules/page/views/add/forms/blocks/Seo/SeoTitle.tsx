import React from 'react';

type Props = {
  formik: any;
};

function SeoTitle({ formik }: Props) {
  return (
    <>
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">نام صفحه</label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="meta_title"
            value={formik.values.meta_title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
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
      <hr />
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">توضیحات متا</label>
        <div className="w-full">
          <textarea
            className=" input leading-6 p-2 h-[120px]  "
            name="meta_description"
            value={formik.values.meta_description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.meta_description && formik.errors.meta_description && (
            <div className="text-danger text-sm">{formik.errors.meta_description}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default SeoTitle;
