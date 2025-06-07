import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useFormik } from 'formik';
import { SeoGenSettingSchema } from './schema/SeoGenSettingSchema';
import { toast } from 'sonner';
import { KeenIcon } from '@/components';

import BasicSettingsBlock from './blocks/BasicSettingsBlock';
import { Link } from 'react-router-dom';

import SiteImageBlock from './blocks/SiteImageBlock';

import OrganBasicSettingsBlock from './blocks/OrganBasicSettingsBlock';
import OrganProfilesBlock from './blocks/OrganProfilesBlock';
import OrganAdditionalInfoBlock from './blocks/OrganAdditionalInfoBlock';

const initialValues = {
  website_name: '',
  alternative_name: '',
  advertising_slogan: ''
};

const RepresentationSettingsForm = () => {
  const dispatch = useAppDispatch();
  // Fetch all users data when the component mounts
  useEffect(() => {
    // dispatch(getAllUsersAction());
  }, [dispatch]);

  const [loading, setLoading] = useState(false);
  // Select users from Redux state
  const UsersData: any = useAppSelector((state) => state.setting.seo.general.error);

  const formik = useFormik({
    initialValues,
    validationSchema: SeoGenSettingSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true);
      try {
        // await dispatch(seoGeneralSettingAction(values)).unwrap();
        setSubmitting(false);
        toast.success(
          <>
            <span className=" text-success ">تنظیمات با موفقیت به‌روزرسانی شد.</span>
          </>
        );
        // Reset form after successful submission
        formik.resetForm();
      } catch (error: any) {
        toast.error(
          <>
            <span className=" text-danger ">
              {error === 'The user name has already been taken.' && (
                <>
                  <KeenIcon icon="shield-cross" className="text-danger text-lg me-2" />
                  <span className="text-md font-medium">نام کاربری وارد شده تکراری است</span>
                </>
              )}
              {error === 'The email has already been taken.' && (
                <>
                  <KeenIcon icon="shield-cross" className="text-danger text-lg me-2" />
                  <span className="text-md font-medium">ایمیل وارد شده تکراری است</span>
                </>
              )}
              {error === 'The mobile number has already been taken.' && (
                <>
                  <KeenIcon icon="shield-cross" className="text-danger text-lg me-2" />
                  <span className="text-md font-medium">شماره موبایل وارد شده تکراری است</span>
                </>
              )}
            </span>
          </>
        );
        setSubmitting(false);
      }
      setLoading(false);
    }
  });

  return (
    <>
      <form className="grid grid-cols-12 gap-5  w-full" onSubmit={formik.handleSubmit} noValidate>
        {formik.status && (
          <div
            className={`text-center text-md font-bold ${
              formik.status.type === 'error' ? 'text-danger' : 'text-success'
            }`}
          >
            {formik.status.message}
          </div>
        )}
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
          <div className=" card-body flex flex-col md:flex-row gap-5 justify-start items-start w-full">
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
              className="btn btn-light  w-full lg:w-fit  flex items-center justify-center"
            >
              <span>لغو</span>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export { RepresentationSettingsForm };
