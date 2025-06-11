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
  Custom: [{ name: 'customJson', label: 'JSON-LD سفارشی', type: 'textarea' }]
  // سایر Schemaها...
};
