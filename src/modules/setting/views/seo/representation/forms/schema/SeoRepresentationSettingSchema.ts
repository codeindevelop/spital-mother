import * as Yup from 'yup';

export const SeoRepresentationSettingSchema = Yup.object().shape({
  site_type: Yup.string()
    .required('نوع وب‌سایت الزامی است')
    .oneOf(['personal', 'company'], 'نوع وب‌سایت باید شخصی یا شرکت باشد'),
  company_name: Yup.string().when('site_type', {
    is: (value: string) => value === 'company',
    then: (schema) =>
      schema.required('نام شرکت الزامی است').max(255, 'نام شرکت حداکثر ۲۵۵ کاراکتر'),
    otherwise: (schema) => schema.nullable()
  }),
  company_alternative_name: Yup.string().nullable().max(255, 'نام جایگزین حداکثر ۲۵۵ کاراکتر'),
  company_logo: Yup.mixed()
    .nullable()
    .test('fileSize', 'حجم فایل حداکثر ۲ مگابایت', (value) => {
      if (value instanceof File) {
        return value.size <= 2 * 1024 * 1024; // 2MB
      }
      return true;
    })
    .test('fileType', 'فرمت فایل باید JPEG یا PNG باشد', (value) => {
      if (value instanceof File) {
        return ['image/jpeg', 'image/png'].includes(value.type);
      }
      return true;
    }),
  company_description: Yup.string().nullable(),
  company_email: Yup.string()
    .nullable()
    .email('ایمیل نامعتبر است')
    .max(255, 'ایمیل حداکثر ۲۵۵ کاراکتر'),
  company_phone: Yup.string().nullable().max(20, 'تلفن حداکثر ۲۰ کاراکتر'),
  company_legal_name: Yup.string().nullable().max(255, 'نام قانونی حداکثر ۲۵۵ کاراکتر'),
  company_founded_date: Yup.date()
    .nullable()
    .max(new Date(), 'تاریخ تاسیس نمی‌تواند در آینده باشد'),
  company_employee_count: Yup.number().nullable().min(0, 'تعداد کارمندان باید مثبت باشد'),
  company_branch_count: Yup.number().nullable().min(0, 'تعداد شعب باید مثبت باشد'),
  company_address: Yup.string().nullable().max(500, 'آدرس حداکثر ۵۰۰ کاراکتر'),
  company_ceo: Yup.string().nullable().max(255, 'نام مدیرعامل حداکثر ۲۵۵ کاراکتر')
});
