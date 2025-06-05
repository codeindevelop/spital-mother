import * as Yup from 'yup';

export const SeoGenSettingSchema = Yup.object().shape({
  website_name: Yup.string().min(3, 'حداقل ۳ کاراکتر').max(50, 'حداکثر ۵۰ کاراکتر'),
  alternative_name: Yup.string().min(3, 'حداقل ۳ کاراکتر').max(50, 'حداکثر ۵۰ کاراکتر'),
  advertising_slogan: Yup.string().min(3, 'حداقل ۳ کاراکتر').max(50, 'حداکثر ۵۰ کاراکتر'),
  send_verify_email: Yup.boolean().required('وضعیت ارسال ایمیل خوش‌آمد الزامی است'),
  send_welcome_sms: Yup.boolean().required('وضعیت ارسال پیامک خوش‌آمد الزامی است'),
  active: Yup.boolean().required('وضعیت حساب الزامی است'),
  create_password: Yup.boolean().required('وضعیت رمز عبور تصادفی الزامی است')
});
