import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

const BasicSettings = ({ user }: any) => {
  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">تنظیمات پایه</h3>
      </div>
      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500">
          <tbody>
            <tr>
              <td className="py-2 min-w-36 text-gray-600 font-normal">Email</td>
              <td className="py-2 min-w-60">
                <button className="text-gray-800 font-normal text-sm hover:text-primary-active">
                  {user?.user?.email}
                </button>
              </td>
              <td className="py-2 max-w-16 text-end">
                <button className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </button>
              </td>
            </tr>

            <tr>
              <td className="py-2 text-gray-600 font-normal">موبایل</td>
              <td className="py-2 text-gray-700 font-normal"> {user?.user?.mobile_number}</td>
              <td className="py-2 text-end">
                <button className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </button>
              </td>
            </tr>

            <tr>
              <td className="py-3.5text-gray-600 font-normal"> نوع حساب کاربری</td>
              <td className="py-3.5 text-gray-700 font-normal">
                {user?.user?.personal_info.account_type === 'individual' ? (
                  <>
                    <span>شخصی</span>
                  </>
                ) : (
                  user?.user?.personal_info.account_type
                )}
              </td>
              <td className="py-3 text-end">
                <button className="btn  btn-light btn-sm">ویرایش حساب</button>
              </td>
            </tr>

            <tr>
              <td className="py-2text-gray-600 font-normal">شماره تلفن </td>
              <td className="py-0.5">{user?.user?.personal_info.phone_number}</td>
              <td className="py-2 text-end">
                <button className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </button>
              </td>
            </tr>

            <tr>
              <td className="py-3text-gray-600 font-normal">شغل</td>
              <td className="py-3 text-gray-700 font-normal">
                {user?.user?.personal_info.occupation}
              </td>
              <td className="py-3 text-end">
                <button className="btn  btn-light btn-sm">ویرایش</button>
              </td>
            </tr>

            <tr>
              <td className="py-3 text-gray-600 text-sm font-normal">وضعیت احراز هویت</td>
              <td className="py-3 text-gray-700 text-2sm font-normal">
                <div className="flex items-center gap-0.5 badge badge-success badge-outline w-fit">
                  {user?.user?.verify.status === 'verified' ? (
                    <>
                      <span>احراز هویت موفق</span>
                    </>
                  ) : (
                    user?.user?.verify.status
                  )}
                </div>
              </td>
              {/* <td className="py-3 text-end">
                <button className="btn btn-link btn-sm">Re-create</button>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { BasicSettings };
