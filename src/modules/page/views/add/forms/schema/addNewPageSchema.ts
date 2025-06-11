// src/modules/page/forms/schema/addNewPageSchema.ts
import * as Yup from 'yup';

export const addNewPageSchema = Yup.object().shape({
  parent_id: Yup.string().uuid('شناسه والد نامعتبر است').nullable(),
  title: Yup.string()
    .min(3, 'حداقل ۳ کاراکتر')
    .max(100, 'حداکثر ۱۰۰ کاراکتر')
    .required('عنوان صفحه الزامی است'),
  slug: Yup.string()
    .min(3, 'حداقل ۳ کاراکتر')
    .max(100, 'حداکثر ۱۰۰ کاراکتر')
    .matches(/^[a-z0-9-]+$/, 'فقط حروف کوچک، اعداد و خط تیره مجاز است')
    .required('آدرس لینک الزامی است'),
  description: Yup.string().max(500, 'حداکثر ۵۰۰ کاراکتر').nullable(),
  content: Yup.string().max(10000, 'حداکثر ۱۰۰۰۰ کاراکتر').nullable(),
  order: Yup.number().min(0, 'ترتیب نمی‌تواند منفی باشد').nullable(),
  template: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
  status: Yup.string()
    .oneOf(['published', 'draft', 'disabled'], 'وضعیت نامعتبر است')
    .required('وضعیت انتشار الزامی است'),
  visibility: Yup.string()
    .oneOf(['public', 'members', 'private'], 'نوع انتشار نامعتبر است')
    .required('نوع انتشار الزامی است'),
  custom_css: Yup.string().max(10000, 'حداکثر ۱۰۰۰۰ کاراکتر').nullable(),
  custom_js: Yup.string().max(10000, 'حداکثر ۱۰۰۰۰ کاراکتر').nullable(),
  seo: Yup.object().shape({
    meta_title: Yup.string()
      .max(70, 'عنوان سئو حداکثر ۷۰ کاراکتر است')
      .nullable()
      .test('seo-title-length', 'عنوان سئو بیش از حد طولانی است', (value) => {
        return !value || value.length <= 70; // گوگل معمولاً 60-70 کاراکتر نشون می‌ده
      }),
    meta_keywords: Yup.string().max(255, 'حداکثر ۲۵۵ کاراکتر').nullable(),
    meta_description: Yup.string()
      .max(160, 'توضیحات متا حداکثر 160 کاراکتر است')
      .nullable()
      .test('meta-desc-length', 'توضیحات متا بیش از حد طولانی است', (value) => {
        return !value || value.length <= 160; // گوگل معمولاً 150-160 کاراکتر نشون می‌ده
      }),
    canonical_url: Yup.string().url('لینک کنونیکال نامعتبر است').nullable(),
    favicon: Yup.string().url('آیکون نامعتبر است').nullable(),
    robots_index: Yup.string().oneOf(['index', 'noindex']).required('الزامی است'),
    robots_follow: Yup.string().oneOf(['follow', 'nofollow']).required('الزامی است'),
    theme_color: Yup.string()
      .matches(/^#[0-9A-F]{6}$/, 'رنگ نامعتبر است')
      .nullable(),
    language: Yup.string().max(10, 'حداکثر ۱۰ کاراکتر').nullable(),
    region: Yup.string().max(10, 'حداکثر ۱۰ کاراکتر').nullable(),
    timezone: Yup.string().max(50, 'حداکثر ۵۰ کاراکتر').nullable(),
    author: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    og_title: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    og_description: Yup.string().max(200, 'حداکثر ۲۰۰ کاراکتر').nullable(),
    og_image: Yup.string().url('تصویر نامعتبر است').nullable(),
    og_type: Yup.string().max(50, 'حداکثر ۵۰ کاراکتر').nullable(),
    og_url: Yup.string().url('لینک نامعتبر است').nullable(),
    og_site_name: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    og_locale: Yup.string().max(10, 'حداکثر ۱۰ کاراکتر').nullable(),
    og_image_alt: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    og_image_width: Yup.number().min(0).nullable(),
    og_image_height: Yup.number().min(0).nullable(),
    og_image_type: Yup.string().max(50, 'حداکثر ۵۰ کاراکتر').nullable(),
    twitter_title: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    twitter_description: Yup.string().max(200, 'حداکثر ۲۰۰ کاراکتر').nullable(),
    twitter_site: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    twitter_creator: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    twitter_image: Yup.string().url('تصویر نامعتبر است').nullable(),
    twitter_card_type: Yup.string().max(50, 'حداکثر ۵۰ کاراکتر').nullable(),
    twitter_site_handle: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    twitter_creator_handle: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    twitter_image_alt: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    twitter_image_width: Yup.number().min(0).nullable(),
    twitter_image_height: Yup.number().min(0).nullable()
  }),
  schema: Yup.object().shape({
    title: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    slug: Yup.string().max(100, 'حداکثر ۱۰۰ کاراکتر').nullable(),
    schema_json: Yup.string()
      .test('is-json', 'فرمت JSON نامعتبر است', (value) => {
        if (!value) return true;
        try {
          JSON.parse(value);
          return true;
        } catch {
          return false;
        }
      })
      .nullable()
  }),
  published_at: Yup.string()
    .matches(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
      'فرمت تاریخ نامعتبر است (مثال: 2025-06-11T10:00:00Z)'
    )
    .nullable(),
  is_active: Yup.boolean().required('وضعیت فعال بودن الزامی است'),
  password: Yup.string()
    .min(6, 'حداقل ۶ کاراکتر')
    .max(100, 'حداکثر ۱۰۰ کاراکتر')
    .when('visibility', {
      is: 'private',
      then: (schema) => schema.required('رمز عبور الزامی است')
    })
    .nullable(),
  password_confirmation: Yup.string()
    .when('visibility', {
      is: 'private',
      then: (schema) =>
        schema
          .oneOf([Yup.ref('password')], 'تکرار رمز عبور مطابقت ندارد')
          .required('تکرار رمز عبور الزامی است')
    })
    .nullable()
});
