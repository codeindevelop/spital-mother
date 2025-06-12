import React from 'react';

type Props = {
  formik: any;
};

function Twitter({ formik }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-medium text-sm text-gray-800">
        شما میتوانید مشخص کنید که این صفحه در تویتر ( ایکس ) با چه عنوان و یا توضیحاتی نمایش داده
        شود و یا عکس دلخواه خود را برای آن انتخاب کنید
      </p>
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">نام صفحه </label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="twitter_title"
            value={formik.values.twitter_title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.twitter_title &&
            formik.errors.twitter_title &&
            typeof formik.errors.twitter_title === 'string' && (
              <div className="text-danger text-sm">{formik.errors.twitter_title}</div>
            )}
          {formik.touched.twitter_title && Array.isArray(formik.errors.twitter_title) && (
            <div className="text-danger text-sm">{formik.errors.twitter_title.join(', ')}</div>
          )}
        </div>
      </div>
      <hr />
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">توضیحات </label>
        <div className="w-full">
          <textarea
            className=" input leading-6 p-2 h-[120px]  "
            name="twitter_description"
            value={formik.values.twitter_description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.twitter_description && formik.errors.twitter_description && (
            <div className="text-danger text-sm">{formik.errors.twitter_description}</div>
          )}
        </div>
      </div>
      <hr />
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">سازنده صفحه</label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="twitter_creator"
            value={formik.values.twitter_creator}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.twitter_creator &&
            formik.errors.twitter_creator &&
            typeof formik.errors.twitter_creator === 'string' && (
              <div className="text-danger text-sm">{formik.errors.twitter_creator}</div>
            )}
          {formik.touched.twitter_creator && Array.isArray(formik.errors.twitter_creator) && (
            <div className="text-danger text-sm">{formik.errors.twitter_creator.join(', ')}</div>
          )}
        </div>
      </div>
      <hr />
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">لینک صفحه</label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="twitter_site"
            value={formik.values.twitter_site}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.twitter_site &&
            formik.errors.twitter_site &&
            typeof formik.errors.twitter_site === 'string' && (
              <div className="text-danger text-sm">{formik.errors.twitter_site}</div>
            )}
          {formik.touched.twitter_site && Array.isArray(formik.errors.twitter_site) && (
            <div className="text-danger text-sm">{formik.errors.twitter_site.join(', ')}</div>
          )}
        </div>
      </div>
      <hr />
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">تصویر</label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="twitter_image"
            value={formik.values.twitter_image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.twitter_image &&
            formik.errors.twitter_image &&
            typeof formik.errors.twitter_image === 'string' && (
              <div className="text-danger text-sm">{formik.errors.twitter_image}</div>
            )}
          {formik.touched.twitter_image && Array.isArray(formik.errors.twitter_image) && (
            <div className="text-danger text-sm">{formik.errors.twitter_image.join(', ')}</div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Twitter;
