import { FormikProps } from 'formik';

interface BasicSettingsBlockProps {
  formik: FormikProps<any>;
}

function BasicSettingsBlock({ formik }: BasicSettingsBlockProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">تنظیمات پایه</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام سایت</label>
          <div className="w-full">
            <input
              className="input"
              type="text"
              name="site_name"
              value={formik.values.site_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.site_name && typeof formik.errors.site_name === 'string' && (
              <div className="text-danger text-sm">{formik.errors.site_name}</div>
            )}
          </div>
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام جایگزین</label>
          <div className="w-full">
            <input
              className="input"
              type="text"
              name="site_alternative_name"
              value={formik.values.site_alternative_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.site_alternative_name &&
              typeof formik.errors.site_alternative_name === 'string' && (
                <div className="text-danger text-sm">{formik.errors.site_alternative_name}</div>
              )}
          </div>
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">شعار تبلیغاتی</label>
          <div className="w-full">
            <input
              className="input"
              type="text"
              name="site_slogan"
              value={formik.values.site_slogan}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.site_slogan && typeof formik.errors.site_slogan === 'string' && (
              <div className="text-danger text-sm">{formik.errors.site_slogan}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicSettingsBlock;
