import OgImageBlock from './OgImageBlock';

function Og({ formik }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-medium text-sm text-gray-800">
        شما میتوانید مشخص کنید که این صفحه در شبکه های اجتماعی با چه عنوان و یا توضیحاتی نمایش داده
        شود و یا عکس دلخواه خود را برای آنا انتخاب کنید
      </p>
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">نام صفحه در شبکه های اجتماعی</label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="og_title"
            value={formik.values.og_title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.og_title &&
            formik.errors.og_title &&
            typeof formik.errors.og_title === 'string' && (
              <div className="text-danger text-sm">{formik.errors.og_title}</div>
            )}
          {formik.touched.og_title && Array.isArray(formik.errors.og_title) && (
            <div className="text-danger text-sm">{formik.errors.og_title.join(', ')}</div>
          )}
        </div>
      </div>
      <hr />
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">توضیحات </label>
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
      <hr />
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">نوع صفحه</label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="og_type"
            value={formik.values.og_type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.og_type &&
            formik.errors.og_type &&
            typeof formik.errors.og_type === 'string' && (
              <div className="text-danger text-sm">{formik.errors.og_type}</div>
            )}
          {formik.touched.og_type && Array.isArray(formik.errors.og_type) && (
            <div className="text-danger text-sm">{formik.errors.og_type.join(', ')}</div>
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
            name="og_url"
            value={formik.values.og_url}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.og_url &&
            formik.errors.og_url &&
            typeof formik.errors.og_url === 'string' && (
              <div className="text-danger text-sm">{formik.errors.og_url}</div>
            )}
          {formik.touched.og_url && Array.isArray(formik.errors.og_url) && (
            <div className="text-danger text-sm">{formik.errors.og_url.join(', ')}</div>
          )}
        </div>
      </div>
      <hr />
      {/* Begin Og Image Box */}
      <OgImageBlock formik={formik} />
      {/* End Og Image Box */}

      <hr />
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">نام وب سایت</label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="og_site_name"
            value={formik.values.og_site_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.og_site_name &&
            formik.errors.og_site_name &&
            typeof formik.errors.og_site_name === 'string' && (
              <div className="text-danger text-sm">{formik.errors.og_site_name}</div>
            )}
          {formik.touched.og_site_name && Array.isArray(formik.errors.og_site_name) && (
            <div className="text-danger text-sm">{formik.errors.og_site_name.join(', ')}</div>
          )}
        </div>
      </div>
      <hr />
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-56">زبان صفحه</label>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="og_locale"
            value={formik.values.og_locale}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.og_locale &&
            formik.errors.og_locale &&
            typeof formik.errors.og_locale === 'string' && (
              <div className="text-danger text-sm">{formik.errors.og_locale}</div>
            )}
          {formik.touched.og_locale && Array.isArray(formik.errors.og_locale) && (
            <div className="text-danger text-sm">{formik.errors.og_locale.join(', ')}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Og;
