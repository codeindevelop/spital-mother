import { FormikProps } from 'formik';

interface OrganProfilesBlockProps {
  formik: FormikProps<any>;
}

function OrganProfilesBlock({ formik }: OrganProfilesBlockProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">حساب‌های کاربری</h3>
      </div>
      <div className="card-body grid gap-5">
        <p className="text-center text-gray-800 text-sm font-normal leading-6">
          در صورت داشتن حساب‌های کاربری دیگر در وب که متعلق به سازمان شما هستند، لطفاً به ما اطلاع
          دهید. این می‌تواند شامل هر تعداد حساب کاربری باشد، مانند یوتیوب، لینکدین، پینترست یا حتی
          ویکی‌پدیا.
        </p>
        {[
          { label: 'فیس‌بوک', name: 'social_facebook' },
          { label: 'توییتر', name: 'social_twitter' },
          { label: 'اینستاگرام', name: 'social_instagram' },
          { label: 'یوتیوب', name: 'social_youtube' },
          { label: 'تیک‌تاک', name: 'social_tiktok' },
          { label: 'تلگرام', name: 'social_telegram' },
          { label: 'اسنپ‌چت', name: 'social_snapchat' },
          { label: 'تردز', name: 'social_threads' },
          { label: 'گیت‌هاب', name: 'social_github' },
          { label: 'لینکدین', name: 'social_linkedin' },
          { label: 'پینترست', name: 'social_pinterest' },
          { label: 'ویکی‌پدیا', name: 'social_wikipedia' }
        ].map(({ label, name }) => (
          <div key={name} className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">{label}</label>
            <div className="w-full">
              <input
                className="input"
                type="text"
                name={name}
                value={formik.values[name] || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched[name] && formik.errors[name] && (
                <div className="text-danger text-sm">{formik.errors[name]}</div>
              )}
            </div>
          </div>
        ))}
        <p className="text-right text-gray-800 text-sm font-normal leading-6 my-2">
          این اطلاعات به گوگل کمک می‌کند تا نمایه شما را بهتر درک کند و شانس شما را برای کسب نتایج
          غنی افزایش دهد. اگر حساب‌های کاربری دیگری دارید که در این لیست نیست، لطفاً آن‌ها را در بخش
          توضیحات اضافه کنید.
        </p>
      </div>
    </div>
  );
}

export default OrganProfilesBlock;
