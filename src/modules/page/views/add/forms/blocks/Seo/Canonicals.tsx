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
            name="seo.canonical_url"
            placeholder="مثال: https://example.com/page"
            value={formik.values.seo.canonical_url}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="text-xs text-gray-600 mt-1">
            لینک Canonical نسخه اصلی صفحه را برای موتورهای جستجو مشخص می‌کند. اگر خالی باشد، URL
            فعلی صفحه استفاده می‌شود. برای جلوگیری از محتوای تکراری، URL معتبر وارد کنید.
          </p>
          {formik.touched.seo?.canonical_url && formik.errors.seo?.canonical_url && (
            <div className="text-danger text-sm">{formik.errors.seo.canonical_url}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Canonicals;
