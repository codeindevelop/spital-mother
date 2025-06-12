// src/modules/page/forms/schema/schemaDefinitions.ts
export const schemaTypes = [
  { value: 'Website', label: 'وب‌سایت' },
  { value: 'Article', label: 'مقاله' },
  { value: 'Product', label: 'محصول' },
  { value: 'FAQPage', label: 'سوالات متداول' },
  { value: 'Event', label: 'رویداد' },
  { value: 'LocalBusiness', label: 'کسب‌وکار محلی' },
  { value: 'Organization', label: 'سازمان' },
  { value: 'Review', label: 'نقد و بررسی' },
  { value: 'Recipe', label: 'دستور پخت' },
  { value: 'VideoObject', label: 'ویدئو' },
  { value: 'BreadcrumbList', label: 'مسیر ناوبری' },
  { value: 'Custom', label: 'سفارشی' }
];

export const schemaFields = {
  Website: [
    { name: 'name', label: 'نام وب‌سایت', type: 'text', required: true },
    { name: 'description', label: 'توضیحات', type: 'textarea' },
    { name: 'url', label: 'آدرس URL', type: 'text' }
  ],
  Article: [
    { name: 'name', label: 'عنوان مقاله', type: 'text', required: true },
    { name: 'description', label: 'توضیحات', type: 'textarea' },
    { name: 'author', label: 'نویسنده', type: 'text' },
    { name: 'datePublished', label: 'تاریخ انتشار', type: 'date' },
    { name: 'image', label: 'تصویر', type: 'text' }
  ],
  Product: [
    { name: 'name', label: 'نام محصول', type: 'text', required: true },
    { name: 'description', label: 'توضیحات', type: 'textarea' },
    { name: 'sku', label: 'کد SKU', type: 'text', required: true },
    { name: 'price', label: 'قیمت', type: 'number', required: true },
    { name: 'currency', label: 'واحد پول', type: 'text', default: 'USD' },
    { name: 'image', label: 'تصویر', type: 'text' },
    { name: 'brand', label: 'برند', type: 'text' }
  ],
  FAQPage: [
    {
      name: 'faq',
      label: 'سوالات و جواب‌ها',
      type: 'array',
      fields: [
        { name: 'question', label: 'سوال', type: 'text', required: true },
        { name: 'answer', label: 'جواب', type: 'textarea', required: true }
      ]
    }
  ],
  Event: [
    { name: 'name', label: 'نام رویداد', type: 'text', required: true },
    { name: 'description', label: 'توضیحات', type: 'textarea' },
    { name: 'startDate', label: 'تاریخ شروع', type: 'datetime-local', required: true },
    { name: 'endDate', label: 'تاریخ پایان', type: 'datetime-local' },
    { name: 'location', label: 'مکان', type: 'text' },
    { name: 'image', label: 'تصویر', type: 'text' }
  ],
  LocalBusiness: [
    { name: 'name', label: 'نام کسب‌وکار', type: 'text', required: true },
    { name: 'description', label: 'توضیحات', type: 'textarea' },
    { name: 'address', label: 'آدرس', type: 'text', required: true },
    { name: 'telephone', label: 'تلفن', type: 'text' },
    { name: 'openingHours', label: 'ساعات کاری', type: 'text' },
    { name: 'image', label: 'تصویر', type: 'text' }
  ],
  Organization: [
    { name: 'name', label: 'نام سازمان', type: 'text', required: true },
    { name: 'description', label: 'توضیحات', type: 'textarea' },
    { name: 'url', label: 'آدرس وب‌سایت', type: 'text' },
    { name: 'logo', label: 'آدرس لوگو', type: 'text' },
    { name: 'contactPoint', label: 'اطلاعات تماس', type: 'text' },
    { name: 'sameAs', label: 'لینک‌های شبکه‌های اجتماعی (کاما جدا شده)', type: 'text' }
  ],
  Review: [
    { name: 'itemReviewed', label: 'نام مورد بررسی', type: 'text', required: true },
    { name: 'reviewBody', label: 'متن بررسی', type: 'textarea', required: true },
    { name: 'author', label: 'نویسنده بررسی', type: 'text', required: true },
    { name: 'ratingValue', label: 'امتیاز (۱ تا ۵)', type: 'number', min: 1, max: 5 },
    { name: 'bestRating', label: 'حداکثر امتیاز', type: 'number', default: 5 }
  ],
  Recipe: [
    { name: 'name', label: 'نام دستور پخت', type: 'text', required: true },
    { name: 'description', label: 'توضیحات', type: 'textarea' },
    { name: 'prepTime', label: 'زمان آماده‌سازی (مثال: PT15M)', type: 'text' },
    { name: 'cookTime', label: 'زمان پخت (مثال: PT30M)', type: 'text' },
    { name: 'recipeIngredient', label: 'مواد لازم (کاما جدا شده)', type: 'text' },
    { name: 'image', label: 'تصویر', type: 'text' }
  ],
  VideoObject: [
    { name: 'name', label: 'نام ویدئو', type: 'text', required: true },
    { name: 'description', label: 'توضیحات', type: 'textarea', required: true },
    { name: 'thumbnailUrl', label: 'آدرس تصویر پیش‌نمایش', type: 'text' },
    { name: 'contentUrl', label: 'آدرس ویدئو', type: 'text', required: true },
    { name: 'uploadDate', label: 'تاریخ بارگذاری', type: 'date' }
  ],
  BreadcrumbList: [
    {
      name: 'itemListElement',
      label: 'آیتم‌های مسیر ناوبری',
      type: 'array',
      fields: [
        { name: 'name', label: 'نام', type: 'text', required: true },
        { name: 'item', label: 'آدرس URL', type: 'text', required: true }
      ]
    }
  ],
  Custom: [{ name: 'customJson', label: 'JSON-LD سفارشی', type: 'textarea' }]
};
