// src/modules/page/forms/AddNewPageForm.tsx
import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { KeenIcon } from '@/components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { addNewPageSchema } from './schema/addNewPageSchema';
import addNewPageAction from '@/modules/page/actions/add/addNewPageAction';
import { toast } from 'sonner';
import BasicInfoBlock from './blocks/basicInfo/BasicInfoBlock';
import PageLinkBlock from './blocks/link/PageLinkBlock';
import PublishPageModeBlock from './blocks/publish/PublishPageModeBlock';

import SchemaSettings from './blocks/schema/SchemaSettings';
import SeoSettings from './blocks/Seo/SeoSettings';

const initialValues = {
  parent_id: null,
  title: '',
  slug: '',
  description: '',
  content: '',
  order: 1,
  template: '',
  status: 'published',
  visibility: 'public',
  custom_css: '',
  custom_js: '',
  seo: {
    meta_title: '',
    meta_keywords: '',
    meta_description: '',
    canonical_url: '',
    favicon: '',
    robots_index: 'index',
    robots_follow: 'follow',
    theme_color: '',
    language: 'fa',
    region: '',
    timezone: 'Asia/Tehran',
    author: '',
    og_title: '',
    og_description: '',
    og_image: '',
    og_type: 'website',
    og_url: '',
    og_site_name: '',
    og_locale: 'fa_IR',
    og_image_alt: '',
    og_image_width: null,
    og_image_height: null,
    og_image_type: '',
    twitter_card: '',
    twitter_description: '',
    twitter_site: '',
    twitter_creator: '',
    twitter_image: '',
    twitter_card_type: 'summary_large_image',
    twitter_site_handle: '',
    twitter_creator_handle: '',
    twitter_image_alt: '',
    twitter_image_width: null,
    twitter_image_height: null
  },
  schema: {
    type: '',
    title: '',
    slug: '',
    content: '',
    data: {}
  },
  published_at: '',
  is_active: true,
  password: '',
  password_confirmation: ''
};

const AddNewPageForm = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: addNewPageSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);

      // تنظیم پیش‌فرض برای schema.title و schema.slug
      const updatedValues = {
        ...values,
        schema: {
          ...values.schema,
          title: values.schema.title || values.title,
          slug: values.schema.slug || values.slug || values.title.toLowerCase().replace(/\s+/g, '-')
        }
      };

      try {
        // disable check next line
        // @ts-ignore
        await dispatch(addNewPageAction(updatedValues)).unwrap();
        setSubmitting(false);
        toast.success(<span className="text-success">صفحه با موفقیت ایجاد شد.</span>);
        resetForm();
      } catch (error: any) {
        toast.error(
          <span className="text-danger">
            <KeenIcon icon="shield-cross" className="text-danger text-lg me-2" />

            {error === 'The schema.data.name field is required when schema.type is Website.' && (
              <>
                <span>وارد کردن نام وب سایت الزامی است</span>
              </>
            )}
            {error === 'The schema.type field is required when schema is present.' && (
              <>
                <span> انتخاب نوع اسکیما برای معرفی هرچه پیج الزامی می باشد</span>
              </>
            )}
          </span>
        );
        setSubmitting(false);
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      {formik.status && (
        <div
          className={`text-center text-md font-bold ${formik.status.type === 'error' ? 'text-danger' : 'text-success'}`}
        >
          {formik.status.message}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 transition-all duration-300">
        <div className="col-span-1 lg:col-span-2 gap-5 flex flex-col">
          <BasicInfoBlock formik={formik} />
          <PageLinkBlock formik={formik} />
          <SeoSettings formik={formik} />
          <SchemaSettings formik={formik} />
        </div>
        <div className="col-span-1 gap-5 flex flex-col">
          <PublishPageModeBlock formik={formik} />
        </div>
      </div>

      <div className="my-5 flex flex-col rounded-lg shadow-sm border md:flex-row items-center justify-start gap-2 w-full bg-gray-100 p-5">
        <button
          type="submit"
          className="btn btn-primary w-full lg:w-auto flex items-center justify-center transition-all duration-300"
          disabled={loading || formik.isSubmitting || !formik.isValid}
        >
          <KeenIcon icon="save" className="text-white me-2" />
          <span>{loading ? 'در حال ارسال...' : 'ذخیره'}</span>
        </button>
        <Link
          to="/page/list"
          className="btn btn-light w-full lg:w-auto flex items-center justify-center transition-all duration-300"
        >
          <span>لغو</span>
        </Link>
      </div>
    </form>
  );
};

export default AddNewPageForm;
