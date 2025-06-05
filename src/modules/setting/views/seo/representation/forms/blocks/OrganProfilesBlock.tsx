import { FormikProps } from 'formik';

interface OrganProfilesBlockProps {
  formik: FormikProps<any>;
}

function OrganProfilesBlock({ formik }: OrganProfilesBlockProps) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-sm">حسابهای کاربری</h3>
        </div>
        <div className="card-body grid gap-5">
          <p className="text-center text-gray-800 text-sm font-normal leading-6">
            در صورت داشتن حساب‌های کاربری دیگر در وب که متعلق به سازمان شما هستند، لطفاً به ما اطلاع
            دهید. این می‌تواند شامل هر تعداد حساب کاربری باشد، مانند یوتیوب، لینکدین، پینترست یا حتی
            ویکی‌پدیا.
          </p>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">فیس‌بوک</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="facebook"
                value={formik.values.facebook}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.facebook && formik.errors.facebook && (
                <div className="text-danger text-sm">{formik.errors.facebook}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">توییتر</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="twitter"
                value={formik.values.twitter}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.twitter && formik.errors.twitter && (
                <div className="text-danger text-sm">{formik.errors.twitter}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">اینستاگرام</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="instagram"
                value={formik.values.instagram}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.instagram && formik.errors.instagram && (
                <div className="text-danger text-sm">{formik.errors.instagram}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">یوتیوب</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="youtube"
                value={formik.values.youtube}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.youtube && formik.errors.youtube && (
                <div className="text-danger text-sm">{formik.errors.youtube}</div>
              )}
            </div>
          </div>

          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">تیک‌تاک</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="tiktok"
                value={formik.values.tiktok}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.tiktok && formik.errors.tiktok && (
                <div className="text-danger text-sm">{formik.errors.tiktok}</div>
              )}
            </div>
          </div>

          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">تلگرام</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="telegram"
                value={formik.values.telegram}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.telegram && formik.errors.telegram && (
                <div className="text-danger text-sm">{formik.errors.telegram}</div>
              )}
            </div>
          </div>

          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">اسنپ‌چت</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="snapchat"
                value={formik.values.snapchat}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.snapchat && formik.errors.snapchat && (
                <div className="text-danger text-sm">{formik.errors.snapchat}</div>
              )}
            </div>
          </div>

          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">تردر</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="treader"
                value={formik.values.treader}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.treader && formik.errors.treader && (
                <div className="text-danger text-sm">{formik.errors.treader}</div>
              )}
            </div>
          </div>

          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">گیت‌هاب</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="github"
                value={formik.values.github}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.github && formik.errors.github && (
                <div className="text-danger text-sm">{formik.errors.github}</div>
              )}
            </div>
          </div>

          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">لینکدین</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="linkedin"
                value={formik.values.linkedin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.linkedin && formik.errors.linkedin && (
                <div className="text-danger text-sm">{formik.errors.linkedin}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">پینترست</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="pinterest"
                value={formik.values.pinterest}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.pinterest && formik.errors.pinterest && (
                <div className="text-danger text-sm">{formik.errors.pinterest}</div>
              )}
            </div>
          </div>
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">ویکی‌پدیا</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name="wikipedia"
                value={formik.values.wikipedia}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.wikipedia && formik.errors.wikipedia && (
                <div className="text-danger text-sm">{formik.errors.wikipedia}</div>
              )}
            </div>
          </div>
          <p className="text-right text-gray-800 text-sm font-normal leading-6 my-2">
            این اطلاعات به گوگل کمک می‌کند تا نمایه شما را بهتر درک کند و شانس شما را برای کسب نتایج
            غنی افزایش دهد. اگر حساب‌های کاربری دیگری دارید که در این لیست نیست، لطفاً آن‌ها را در
            بخش توضیحات اضافه کنید.
          </p>
        </div>
      </div>
    </>
  );
}

export default OrganProfilesBlock;
