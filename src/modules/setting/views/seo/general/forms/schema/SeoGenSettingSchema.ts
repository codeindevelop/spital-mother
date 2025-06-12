import * as Yup from 'yup';

export const SeoGenSettingSchema = Yup.object().shape({
  site_name: Yup.string()
    .min(3, 'حداقل ۳ کاراکتر')
    .max(255, 'حداکثر ۲۵۵ کاراکتر')
    .required('نام سایت الزامی است'),
  site_alternative_name: Yup.string()
    .min(3, 'حداقل ۳ کاراکتر')
    .max(255, 'حداکثر ۲۵۵ کاراکتر')
    .nullable(),
  site_slogan: Yup.string().min(3, 'حداقل ۳ کاراکتر').max(255, 'حداکثر ۲۵۵ کاراکتر').nullable(),
  title_separator: Yup.string()
    .oneOf(
      ['-', '|', '–', '—', ':', '·', '•', '*', '⋆', '~', '«', '»', '>', '<'],
      'جداکننده باید یکی از مقادیر مجاز باشد'
    )
    .required('جداکننده الزامی است'),
  og_image: Yup.mixed()
    .nullable()
    .test('fileSize', 'حجم فایل باید کمتر از ۲ مگابایت باشد', (value) => {
      if (!value) return true;
      if (value instanceof File || value instanceof Blob) {
        return value.size <= 2 * 1024 * 1024;
      }
      return false;
    })
    .test('fileType', 'فرمت فایل باید JPG یا PNG باشد', (value) => {
      if (!value) return true;
      if (value instanceof File || value instanceof Blob) {
        return ['image/jpeg', 'image/png'].includes((value as File).type);
      }
      return false;
    }),
  ogImageUrl: Yup.string().nullable() // اضافه کردن اعتبارسنجی برای URL
});
