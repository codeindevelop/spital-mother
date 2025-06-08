import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useFormik } from 'formik';
import { SeoGenSettingSchema } from './schema/SeoGenSettingSchema';
import { toast } from 'sonner';
import { KeenIcon } from '@/components';
import { Link } from 'react-router-dom';
import BasicSettingsBlock from './blocks/BasicSettingsBlock';
import SeparatorSettingsBlock from './blocks/SeparatorSettingsBlock';
import SiteImageBlock from './blocks/SiteImageBlock';
import {
  fetchSeoSettings,
  updateSeoSettings
} from '@/modules/setting/actions/seo/seoGeneralSettingAction';

const GeneralSettingsForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { settings, loading } = useAppSelector((state) => state.setting.seo.general);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageChanged, setImageChanged] = useState<boolean>(false); // ردیابی تغییرات تصویر

  useEffect(() => {
    dispatch(fetchSeoSettings());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      site_name: settings?.site_name || '',
      site_alternative_name: settings?.site_alternative_name || '',
      site_slogan: settings?.site_slogan || '',
      title_separator: settings?.title_separator || '-',
      og_image: null as File | null,
      ogImageUrl: settings?.og_image || null
    },
    enableReinitialize: true,
    validationSchema: SeoGenSettingSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const payload: any = {
          site_name: values.site_name,
          site_alternative_name: values.site_alternative_name,
          site_slogan: values.site_slogan,
          title_separator: values.title_separator
        };
        // فقط اگه تصویر تغییر کرده، og_image رو به payload اضافه کن
        if (imageChanged) {
          payload.og_image = values.og_image;
        }
        const response = await dispatch(updateSeoSettings(payload)).unwrap();

        setSubmitting(false);
        toast.success('تنظیمات با موفقیت به‌روزرسانی شد.');
        if (imageChanged) {
          setPreviewImage(null);
          formik.setFieldValue('ogImageUrl', response.og_image);
          setImageChanged(false); // ریست وضعیت تغییر تصویر
        }
      } catch (err) {
        toast.error((err as string) || 'خطا در به‌روزرسانی تنظیمات');
        setSubmitting(false);
      }
    }
  });

  const handleImageChange = (file: File | null) => {
    formik.setFieldValue('og_image', file);
    setPreviewImage(file ? URL.createObjectURL(file) : null);
    setImageChanged(true); // علامت‌گذاری تغییر تصویر
    if (!file) {
      formik.setFieldValue('ogImageUrl', null);
    }
  };

  return (
    <form className="grid grid-cols-12 gap-5 w-full" onSubmit={formik.handleSubmit} noValidate>
      <div className="col-span-12 md:col-span-6 gap-5 flex flex-col">
        <BasicSettingsBlock formik={formik} />
        <SiteImageBlock
          formik={formik}
          previewImage={previewImage}
          onImageChange={handleImageChange}
        />
      </div>
      <div className="col-span-12 md:col-span-6 gap-5 flex flex-col">
        <SeparatorSettingsBlock formik={formik} />
      </div>
      <hr />
      <div className="card bg-gray-200 w-full col-span-12 flex flex-col lg:flex-row gap-5 justify-start items-start">
        <div className="card-body flex flex-col md:flex-row gap-5 justify-start items-start w-full">
          <button
            type="submit"
            className="btn btn-primary w-full lg:w-1/5 flex items-center justify-center"
            disabled={loading || formik.isSubmitting}
          >
            <KeenIcon icon="files" className="text-white me-2" />
            <span>{loading ? 'در حال ارسال...' : 'ذخیره'}</span>
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

export default GeneralSettingsForm;
