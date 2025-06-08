import { FormikProps } from 'formik';

interface OrganBasicSettingsBlockProps {
  formik: FormikProps<any>;
}

function OrganBasicSettingsBlock({ formik }: OrganBasicSettingsBlockProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">معرفی شرکت</h3>
      </div>
      <div className="card-body grid gap-5">
        <p className="text-center text-gray-800 text-sm font-normal leading-6">
          لطفا درباره شرکت یا سازمان خود بیشتر به ما بگویید. این اطلاعات به گوگل کمک می‌کند تا
          وب‌سایت شما را درک کند و شانس شما را برای کسب نتایج غنی افزایش دهد.
        </p>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام شرکت</label>
          <div className="w-full">
            <input
              className="input"
              type="text"
              name="company_name"
              value={formik.values.company_name || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.company_name && formik.errors.company_name && (
              <div className="text-danger text-sm">{formik.errors.company_name}</div>
            )}
          </div>
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام جایگزین</label>
          <div className="w-full">
            <input
              className="input"
              type="text"
              name="company_alternative_name"
              value={formik.values.company_alternative_name || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="text-right text-gray-800 text-sm font-normal leading-6 my-2">
              حتی اگر نام شرکت شما به صورت کامل در وب‌سایت شما ذکر شده است، این فیلد را پر کنید. این
              نام جایگزین به گوگل کمک می‌کند تا درک بهتری از برند شما داشته باشد و در صورت نیاز، از
              آن در نتایج جستجو استفاده کند.
            </p>
            {formik.touched.company_alternative_name && formik.errors.company_alternative_name && (
              <div className="text-danger text-sm">{formik.errors.company_alternative_name}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganBasicSettingsBlock;
