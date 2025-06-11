// src/modules/page/forms/schema/addNewPageSchema.ts
import * as Yup from 'yup';

export const addNewPageSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'حداقل ۳ کاراکتر')
    .max(100, 'حداکثر ۱۰۰ کاراکتر')
    .required('عنوان صفحه الزامی است'),
  slug: Yup.string()
    .min(3, 'حداقل ۳ کاراکتر')
    .max(100, 'حداکثر ۱۰۰ کاراکتر')
    .matches(/^[a-z0-9-]+$/i, 'فقط حروف کوچک، اعداد و خط تیره مجاز است')
    .required('آدرس لینک الزامی است'),
  description: Yup.string().nullable(),
  content: Yup.string().nullable(),
  order: Yup.number().min(0, 'ترتیب باید مثبت باشد').default(1),
  template: Yup.string().nullable(),
  status: Yup.string()
    .oneOf(['draft', 'published', 'archived'], 'وضعیت نامعتبر است')
    .default('published'),
  visibility: Yup.string()
    .oneOf(['public', 'private', 'unlisted'], 'دیدپذیری نامعتبر است')
    .default('public'),
  custom_css: Yup.string().nullable(),
  custom_js: Yup.string().nullable(),
  published_at: Yup.string().nullable(),
  is_active: Yup.boolean().default(true),
  parent_id: Yup.string().uuid('شناسه والد نامعتبر است').nullable(),
  password: Yup.string().nullable(),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'تکرار رمزعبور مطابقت ندارد')
    .nullable(),
  seo: Yup.object().shape({
    meta_title: Yup.string().max(255, 'حداکثر ۲۵۵ کاراکتر').nullable(),
    meta_keywords: Yup.string().max(255, 'حداکثر ۲۵۵ کاراکتر').nullable(),
    meta_description: Yup.string().nullable(),
    canonical_url: Yup.string().url('URL نامعتبر است').nullable(),
    favicon: Yup.string().nullable(),
    robots_index: Yup.string().oneOf(['index', 'noindex']).default('index'),
    robots_follow: Yup.string().oneOf(['follow', 'nofollow']).default('follow'),
    theme_color: Yup.string().nullable(),
    language: Yup.string().default('fa'),
    region: Yup.string().nullable(),
    timezone: Yup.string().default('Asia/Tehran'),
    author: Yup.string().nullable(),
    og_title: Yup.string().nullable(),
    og_description: Yup.string().nullable(),
    og_image: Yup.string().url('URL تصویر نامعتبر است').nullable(),
    og_type: Yup.string().default('website'),
    og_url: Yup.string().url('URL نامعتبر است').nullable(),
    og_site_name: Yup.string().nullable(),
    og_locale: Yup.string().default('fa_IR'),
    og_image_alt: Yup.string().nullable(),
    og_image_width: Yup.number().nullable(),
    og_image_height: Yup.number().nullable(),
    og_image_type: Yup.string().nullable(),
    twitter_card: Yup.string().nullable(),
    twitter_description: Yup.string().nullable(),
    twitter_site: Yup.string().nullable(),
    twitter_creator: Yup.string().nullable(),
    twitter_image: Yup.string().url('URL تصویر نامعتبر است').nullable(),
    twitter_card_type: Yup.string().default('summary_large_image'),
    twitter_site_handle: Yup.string().nullable(),
    twitter_creator_handle: Yup.string().nullable(),
    twitter_image_alt: Yup.string().nullable(),
    twitter_image_width: Yup.number().nullable(),
    twitter_image_height: Yup.number().nullable()
  }),
  schema: Yup.object().shape({
    type: Yup.string()
      .oneOf(
        [
          'Website',
          'Article',
          'Product',
          'FAQPage',
          'Event',
          'LocalBusiness',
          'Organization',
          'Review',
          'Recipe',
          'VideoObject',
          'BreadcrumbList',
          'Custom'
        ],
        'نوع Schema غیرمجاز است'
      )
      .nullable(),
    title: Yup.string().max(255, 'حداکثر ۲۵۵ کاراکتر').nullable(),
    slug: Yup.string().max(255, 'حداکثر ۲۵۵ کاراکتر').nullable(),
    content: Yup.string().nullable(),
    data: Yup.mixed().when('type', {
      is: 'Product',
      then: (schema) =>
        Yup.object({
          name: Yup.string().required('نام محصول الزامی است'),
          description: Yup.string().nullable(),
          sku: Yup.string().required('SKU الزامی است'),
          price: Yup.number().required('قیمت الزامی است').min(0, 'قیمت باید مثبت باشد'),
          currency: Yup.string().nullable(),
          image: Yup.string().url('URL تصویر نامعتبر است').nullable(),
          brand: Yup.string().nullable()
        }),
      otherwise: (schema) =>
        Yup.mixed().when('type', {
          is: 'Article',
          then: (schema) =>
            Yup.object({
              name: Yup.string().required('عنوان مقاله الزامی است'),
              description: Yup.string().nullable(),
              author: Yup.string().nullable(),
              datePublished: Yup.string().nullable(),
              image: Yup.string().url('URL تصویر نامعتبر است').nullable()
            }),
          otherwise: (schema) =>
            Yup.mixed().when('type', {
              is: 'FAQPage',
              then: (schema) =>
                Yup.object({
                  faq: Yup.array()
                    .of(
                      Yup.object().shape({
                        question: Yup.string().required('سوال الزامی است'),
                        answer: Yup.string().required('جواب الزامی است')
                      })
                    )
                    .min(1, 'حداقل یک سوال لازم است')
                }),
              otherwise: (schema) =>
                Yup.mixed().when('type', {
                  is: 'Custom',
                  then: (schema) =>
                    Yup.object({
                      customJson: Yup.string()
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
                  otherwise: (schema) => Yup.object().nullable()
                })
            })
        })
    })
  })
});
