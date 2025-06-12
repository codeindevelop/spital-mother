import { FormikProps } from 'formik';

interface OrganAdditionalInfoBlockProps {
  formik: FormikProps<any>;
}

function OrganAdditionalInfoBlock({ formik }: OrganAdditionalInfoBlockProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">اطلاعات تکمیلی سازمان</h3>
      </div>
      <div className="card-body grid gap-5">
        <p className="text-right text-gray-800 text-sm font-normal leading-6">
          با ارائه اطلاعات بیشتر درباره سازمان خود، نمایه شما را غنی‌تر کنید. هر چه اطلاعات بیشتری
          به اشتراک بگذارید، گوگل بهتر وب‌سایت شما را درک می‌کند.
        </p>
        {[
          { label: 'توضیحات شرکت', name: 'company_description', type: 'textarea' },
          { label: 'آدرس ایمیل', name: 'company_email', type: 'email' },
          { label: 'تلفن', name: 'company_phone', type: 'text' },
          { label: 'نام قانونی', name: 'company_legal_name', type: 'text' },
          { label: 'تاریخ تاسیس', name: 'company_founded_date', type: 'date' },
          { label: 'تعداد کارمندان', name: 'company_employee_count', type: 'number' },
          { label: 'تعداد شعب', name: 'company_branch_count', type: 'number' },
          { label: 'آدرس', name: 'company_address', type: 'text' },
          { label: 'مدیرعامل', name: 'company_ceo', type: 'text' }
        ].map(({ label, name, type }) => (
          <div key={name} className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">{label}</label>
            <div className="w-full">
              {type === 'textarea' ? (
                <textarea
                  className="input leading-6 p-2 h-[120px] "
                  name={name}
                  value={formik.values[name] || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows={5}
                />
              ) : (
                <input
                  className="input"
                  type={type}
                  name={name}
                  value={formik.values[name] || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              )}
              {formik.touched[name] && formik.errors[name] && (
                <div className="text-danger text-sm">{formik.errors[name]}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganAdditionalInfoBlock;
