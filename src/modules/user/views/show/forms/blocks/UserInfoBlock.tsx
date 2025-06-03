import { CrudAvatarUpload } from '@/partials/crud';
import { KeenIcon } from '@/components';

function UserInfoBlock() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">اطلاعات پایه</h3>
      </div>
      <div className="card-body grid gap-4">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">تصویر پروفایل</label>
          <div className="flex items-center justify-between flex-wrap grow gap-2.5">
            <span className="text-2sm font-medium text-gray-600">150x150px JPEG, PNG Image</span>
            <CrudAvatarUpload
            //   onChange={(file: any) => formik.setFieldValue('avatar', file)}
            //   value={formik.values.avatar}
            />
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام کاربری</label>
          <div className="w-full flex justify-between">
            <h2>هادی</h2>
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
          <label className="form-label max-w-56">نام</label>
          <div className="w-full flex justify-between">
            <h2>هادی</h2>
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
          <label className="form-label max-w-56">نام خانوادگی</label>
          <div className="w-full flex justify-between">
            <h2>هادی</h2>
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
          <label className="form-label max-w-56"> ایمیل</label>
          <div className="w-full flex justify-between">
            <h2>هادی</h2>
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
          <label className="form-label max-w-56">شماره موبایل </label>
          <div className="w-full flex justify-between">
            <h2>هادی</h2>
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
            <h2>هادی</h2>
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

export default UserInfoBlock;
