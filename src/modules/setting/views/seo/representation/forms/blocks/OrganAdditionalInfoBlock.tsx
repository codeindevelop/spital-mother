import { FormikProps } from 'formik';

interface OrganAdditionalInfoBlockProps {
  formik: FormikProps<any>;
}

function OrganAdditionalInfoBlock({ formik }: OrganAdditionalInfoBlockProps) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-sm"> اطلاعات تکمیلی سازمان</h3>
        </div>
        <div className="card-body grid gap-5">
          <p className="text-right text-gray-800 text-sm font-normal leading-6">
            با ارائه اطلاعات بیشتر درباره سازمان خود، نمایه شما را غنی‌تر کنید. هر چه اطلاعات بیشتری
            به اشتراک بگذارید، گوگل بهتر وب‌سایت شما را درک می‌کند.
          </p>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">توضیحات شرکت</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="company_description"
                value={formik.values.company_description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.company_description && formik.errors.company_description && (
                <div className="text-danger text-sm">{formik.errors.company_description}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">آدرس ایمیل</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.email && formik.errors.email && (
                <div className="text-danger text-sm">{formik.errors.email}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56"> تلفن</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.phone && formik.errors.phone && (
                <div className="text-danger text-sm">{formik.errors.phone}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56"> تلفن</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.phone && formik.errors.phone && (
                <div className="text-danger text-sm">{formik.errors.phone}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56"> نام قانونی </label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="legal_name"
                value={formik.values.legal_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.legal_name && formik.errors.legal_name && (
                <div className="text-danger text-sm">{formik.errors.legal_name}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56"> تاریخ تاسیس</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="founding_at"
                value={formik.values.founding_at}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.founding_at && formik.errors.founding_at && (
                <div className="text-danger text-sm">{formik.errors.founding_at}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">تعداد کارمندان</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="employee_count"
                value={formik.values.employee_count}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.employee_count && formik.errors.employee_count && (
                <div className="text-danger text-sm">{formik.errors.employee_count}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrganAdditionalInfoBlock;
