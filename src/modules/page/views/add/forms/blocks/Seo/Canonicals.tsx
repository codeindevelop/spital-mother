import React from 'react';

type Props = {
  formik: any;
};

function Canonicals({ formik }: Props) {
  return (
    <>
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">لینک Canonical</label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="canonical_url"
            value={formik.values.canonical_url}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.canonical_url &&
            formik.errors.canonical_url &&
            typeof formik.errors.canonical_url === 'string' && (
              <div className="text-danger text-sm">{formik.errors.canonical_url}</div>
            )}
          {formik.touched.canonical_url && Array.isArray(formik.errors.canonical_url) && (
            <div className="text-danger text-sm">{formik.errors.canonical_url.join(', ')}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Canonicals;
