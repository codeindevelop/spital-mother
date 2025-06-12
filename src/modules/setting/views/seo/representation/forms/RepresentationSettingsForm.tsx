import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useFormik } from 'formik';
import { SeoRepresentationSettingSchema } from './schema/SeoRepresentationSettingSchema';
import { toast } from 'sonner';
import { KeenIcon } from '@/components';
import { Link } from 'react-router-dom';
import BasicSettingsBlock from './blocks/BasicSettingsBlock';
import SiteImageBlock from './blocks/SiteImageBlock';
import OrganBasicSettingsBlock from './blocks/OrganBasicSettingsBlock';
import OrganProfilesBlock from './blocks/OrganProfilesBlock';
import OrganAdditionalInfoBlock from './blocks/OrganAdditionalInfoBlock';
import {
  fetchSeoRepresentationSettings,
  updateSeoRepresentationSettings
} from '@/modules/setting/actions/seo/seoRepresentationSettingAction';

const initialValues = {
  site_type: 'personal',
  company_name: '',
  company_alternative_name: '',
  company_logo: null, // همیشه null برای فرم
  company_description: '',
  company_email: '',
  company_phone: '',
  company_legal_name: '',
  company_founded_date: '',
  company_employee_count: null,
  company_branch_count: null,
  company_address: '',
  company_ceo: '',
  social_facebook: '',
  social_twitter: '',
  social_instagram: '',
  social_youtube: '',
  social_tiktok: '',
  social_telegram: '',
  social_snapchat: '',
  social_threads: '',
  social_github: '',
  social_linkedin: '',
  social_pinterest: '',
  social_wikipedia: ''
};

const RepresentationSettingsForm = () => {
  const dispatch = useAppDispatch();
  const { settings, loading, error } = useAppSelector(
    (state) => state.setting.seo.seoRepresentation
  );
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchSeoRepresentationSettings());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: settings
      ? {
          ...settings,
          company_logo: settings.company_logo || null // URL یا null
        }
      : initialValues,
    enableReinitialize: true,
    validationSchema: SeoRepresentationSettingSchema, // فرض می‌کنیم Yup درست شده
    onSubmit: async (values, { setSubmitting }) => {
      setFormLoading(true);
      try {
        await dispatch(updateSeoRepresentationSettings(values)).unwrap();
        toast.success('تنظیمات با موفقیت به‌روزرسانی شد.');
      } catch (err: any) {
        console.error('Submit error:', err);
        toast.error(err || 'خطا در به‌روزرسانی تنظیمات');
      }
      setFormLoading(false);
      setSubmitting(false);
    },
    validateOnBlur: true,
    validateOnChange: true
  });

  return (
    <form className="grid grid-cols-12 gap-5 w-full" onSubmit={formik.handleSubmit} noValidate>
      {error && <div className="text-center text-md font-bold text-danger">{error}</div>}
      <div className="col-span-12 md:col-span-6 gap-5 flex flex-col">
        <BasicSettingsBlock formik={formik} />
        <OrganBasicSettingsBlock formik={formik} />
        <OrganProfilesBlock formik={formik} />
      </div>
      <div className="col-span-12 md:col-span-6 gap-5 flex flex-col">
        <SiteImageBlock formik={formik} />
        <OrganAdditionalInfoBlock formik={formik} />
      </div>
      <div className="card bg-gray-200 w-full col-span-12 flex flex-col lg:flex-row gap-5 justify-start items-start">
        <div className="card-body flex flex-col md:flex-row gap-5 justify-start items-start w-full">
          <button
            type="submit"
            className="btn btn-primary w-full lg:w-1/5 flex items-center justify-center"
            disabled={formLoading || formik.isSubmitting || loading}
          >
            <KeenIcon icon="files" className="text-white me-2" />
            <span>{formLoading ? 'در حال ارسال...' : 'ذخیره'}</span>
          </button>
          <Link
            to="/setting/default"
            className="btn btn-light w-full lg:w-fit flex items-center justify-center"
          >
            <span>لغو</span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export { RepresentationSettingsForm };
