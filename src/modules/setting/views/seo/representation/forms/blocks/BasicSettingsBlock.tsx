import { FormikProps } from 'formik';

interface BasicSettingsBlockProps {
  formik: FormikProps<any>;
}

function BasicSettingsBlock({ formik }: BasicSettingsBlockProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">نوع وب‌سایت</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نوع وب‌سایت</label>
          <div className="flex flex-col items-start grow gap-7.5 w-full">
            <div className="flex items-center gap-7.5">
              <label className="switch">
                <span className="switch-label">شخصی</span>
                <input
                  type="radio"
                  name="site_type"
                  value="personal"
                  checked={formik.values.site_type === 'personal'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
              <label className="switch">
                <span className="switch-label">شرکت</span>
                <input
                  type="radio"
                  name="site_type"
                  value="company"
                  checked={formik.values.site_type === 'company'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
            </div>
            {formik.touched.site_type && formik.errors.site_type && (
              <div className="text-danger text-sm">{formik.errors.site_type}</div>
            )}
            <span className="form-info text-gray-800 text-2sm font-normal leading-6">
              با مشخص کردن نوع وب‌سایت، می‌توانید تنظیمات مربوط به سئو و نمایه‌سازی را بهینه کنید.
              این انتخاب به موتورهای جستجو کمک می‌کند تا بهتر درک کنند که محتوای شما چه نوع سایتی را
              نمایندگی می‌کند.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicSettingsBlock;
