import React from 'react';

type Props = {
  formik: any;
};

function Keywords({ formik }: Props) {
  return (
    <>
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">کلمات کلیدی</label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="meta_keywords"
            value={formik.values.meta_keywords}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.meta_keywords &&
            formik.errors.meta_keywords &&
            typeof formik.errors.meta_keywords === 'string' && (
              <div className="text-danger text-sm">{formik.errors.meta_keywords}</div>
            )}
          {formik.touched.meta_keywords && Array.isArray(formik.errors.meta_keywords) && (
            <div className="text-danger text-sm">{formik.errors.meta_keywords.join(', ')}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Keywords;
