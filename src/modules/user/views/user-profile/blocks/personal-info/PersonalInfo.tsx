import { KeenIcon } from '@/components';
 
import { UserAvatar } from './UserAvatar';

const PersonalInfo = ({ user }: any) => {
  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">اطلاعات پایه</h3>
      </div>
      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500">
          <tbody>
            <tr>
              <td className="py-2 min-w-28 text-gray-600 font-normal">عکس</td>
              <td className="py-2 text-gray700 font-normal min-w-32 text-2sm leading-6">
                عکس حداقل 150x150 پیکسل باشد و در فرمت JPEG یا PNG
              </td>
              <td className="py-2 text-center">
                <div className="flex justify-center items-center">
                  <UserAvatar user={user} />
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600 font-normal">نام</td>
              <td className="py-2 text-gray-800 font-normal text-sm">
                <span className="font-medium me-1 tracking-normal">
                  {user?.user.personal_info?.first_name}
                </span>
                <span className="font-medium me-1 tracking-normal">
                  {user?.user.personal_info?.last_name}
                </span>
              </td>
              <td className="py-2 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3 text-gray-600 font-normal"> نوع کاربری</td>
              <td className="py-3 text-gray-800 font-normal">
                {user?.role == 'super-admin' && (
                  <>
                    <span className="text-xs font-medium tracking-normal">مدیر کل</span>
                  </>
                )}
                {user?.role == 'admin' && (
                  <>
                    <span className="text-xs font-medium tracking-normal">مدیر </span>
                  </>
                )}
              </td>
              <td className="py-3 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3 text-gray-600 font-normal">تاریخ تولد</td>
              <td className="py-3 text-gray-700 text-sm font-normal font-estedad tracking-normal">
                {user?.user.personal_info?.date_of_birth}
              </td>
              <td className="py-3 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3 text-gray-600 font-normal">جنسیت</td>
              <td className="py-3 text-gray-700 text-sm font-normal">
                {user?.user.personal_info?.gender == 'male' ? (
                  <>
                    <span>آقا</span>
                  </>
                ) : user?.user.personal_info?.gender == 'female' ? (
                  <>
                    <span>خانم</span>
                  </>
                ) : (
                  <>
                    <span>نامشخص</span>
                  </>
                )}
              </td>
              <td className="py-3 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
            <tr className="   ">
              <td className="">آدرس</td>
              {user?.user.personal_info.home_address !== null ? (
                <>
                  <td className="">
                    <span className="  ">{user?.user.personal_info.home_address}</span>
                  </td>
                </>
              ) : (
                <>
                  <td className="py-3 text-gray-700 text-2sm font-normal"> </td>
                  <td className="py-3 text-gray-700 text-2sm font-normal">ثبت نشده است</td>
                </>
              )}
              <td className="py-3  ">
                {user?.user.personal_info.home_address !== null ? (
                  <>
                    <button className="btn btn-link btn-sm">ویرایش</button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-link btn-sm">افزودن</button>
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { PersonalInfo };
