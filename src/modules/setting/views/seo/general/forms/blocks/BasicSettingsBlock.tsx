import { FormikProps } from 'formik';

interface BasicSettingsBlockProps {
  formik: FormikProps<any>;
}

function BasicSettingsBlock({ formik }: BasicSettingsBlockProps) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-sm">تنظیمات پایه</h3>
        </div>
        <div className="card-body grid gap-5">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">نام وب سایت</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="website_name"
                value={formik.values.website_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.website_name && formik.errors.website_name && (
                <div className="text-danger text-sm">{formik.errors.website_name}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">نام جایگزین</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="alternative_name"
                value={formik.values.alternative_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.alternative_name && formik.errors.alternative_name && (
                <div className="text-danger text-sm">{formik.errors.alternative_name}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">شعار تبلیغاتی</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="advertising_slogan"
                value={formik.values.advertising_slogan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* {formik.touched.email && formik.errors.email && (
                <div className="text-danger text-sm">{formik.errors.email}</div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicSettingsBlock;
