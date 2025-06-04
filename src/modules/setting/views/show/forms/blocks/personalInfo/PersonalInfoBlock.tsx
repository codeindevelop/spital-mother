import { KeenIcon } from '@/components';
import { useAppSelector } from '@/store/hooks';
import { TPersonalInfo } from './_personal-type';

function PersonalInfoBlock() {
  // Adjust selector and typing as needed
  const personalInfo = useAppSelector(
    (state: any): TPersonalInfo => state.users.show.user?.personal_info || {}
  );

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">اطلاعات شخصی</h3>
        <h2>{personalInfo?.display_name}</h2>
      </div>
      <div className="card-body grid gap-4">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام نمایشی</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.display_name}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">جنسیت</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.gender}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام پدر</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.father_name}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام مادر</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.mother_name}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">بیوگرافی کوتاه</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.short_bio}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">وضعیت تأهل</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.marital_status}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">تاریخ تولد</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.date_of_birth}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">محل تولد</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.place_of_birth}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">شهر محل تولد</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.born_city}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">شهر محل سکونت</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.live_city}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">شغل</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.occupation}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">عنوان شغلی</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.job_title}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نوع شغل</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.job_type}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">محل کار</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.job_location}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">دپارتمان</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.job_department}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">سال‌های تجربه</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.job_experience_years}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">مهارت‌ها</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.job_skills}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">صنعت</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.job_industry}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">شرکت</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.job_company}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام دانشگاه</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.university_name}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">سطح تحصیلات</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.education_level}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">رشته تحصیلی</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.education_field}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">مدرک تحصیلی</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.education_degree}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">مؤسسه آموزشی</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.education_institution}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">تاریخ شروع تحصیل</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.education_start_date}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">تاریخ پایان تحصیل</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.education_end_date}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">معدل</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.education_grade}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">کشور تحصیل</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.education_country}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">شهر تحصیل</label>
          <div className="w-full flex justify-between">
            <h2>{personalInfo.education_city}</h2>
            <button className="me-2">
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoBlock;
