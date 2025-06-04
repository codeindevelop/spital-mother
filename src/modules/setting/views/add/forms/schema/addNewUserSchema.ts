import * as Yup from 'yup';

export const addNewUserSchema = Yup.object().shape({
  user_name: Yup.string()
    .min(3, 'حداقل ۳ کاراکتر')
    .max(50, 'حداکثر ۵۰ کاراکتر')
    .required('نام کاربری الزامی است'),
  first_name: Yup.string()
    .min(3, 'حداقل ۳ کاراکتر')
    .max(50, 'حداکثر ۵۰ کاراکتر')
    .required('نام الزامی است'),
  last_name: Yup.string()
    .min(3, 'حداقل ۳ کاراکتر')
    .max(50, 'حداکثر ۵۰ کاراکتر')
    .required('نام خانوادگی الزامی است'),
  gender: Yup.string()
    .oneOf(['male', 'female', 'other'], 'جنسیت نامعتبر است')
    .required('جنسیت الزامی است'),
  mobile_number: Yup.string()
    .nullable()
    .max(20, 'حداکثر ۲۰ کاراکتر')
    .when('email', {
      is: (email: any) => !email,
      then: (schema) => schema.required('باید یا شماره موبایل یا آدرس ایمیل برای کاربر وارد شود')
    }),
  email: Yup.string().nullable().email('فرمت ایمیل نامعتبر است').max(255, 'حداکثر ۲۵۵ کاراکتر'),
  // .when('mobile_number', {
  //   is: (mobile_number: any) => !mobile_number,
  //   then: (schema) => schema.required('حداقل یکی از شماره موبایل یا ایمیل الزامی است')
  // }),
  password: Yup.string()
    .nullable()
    .min(6, 'حداقل ۶ کاراکتر')
    .max(100, 'حداکثر ۱۰۰ کاراکتر')
    .when('create_password', {
      is: false,
      then: (schema) => schema.required('رمز عبور الزامی است')
    }),
  password_confirmation: Yup.string().when('create_password', {
    is: false,
    then: (schema) =>
      schema
        .oneOf([Yup.ref('password')], 'تکرار رمز عبور مطابقت ندارد')
        .required('تکرار رمز عبور الزامی است')
  }),
  send_verify_email: Yup.boolean().required('وضعیت ارسال ایمیل خوش‌آمد الزامی است'),
  send_welcome_sms: Yup.boolean().required('وضعیت ارسال پیامک خوش‌آمد الزامی است'),
  active: Yup.boolean().required('وضعیت حساب الزامی است'),
  create_password: Yup.boolean().required('وضعیت رمز عبور تصادفی الزامی است')
});
