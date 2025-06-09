import { KeenIcon } from '@/components';

const Work = ({ user }: any) => {
  // Change String to Array for load skills
  const skillArray = user?.user?.personal_info?.job_skills
    ? user?.user?.personal_info?.job_skills
        .split('،')
        .map((skill: any) => skill.trim())
        .filter((skill: any) => skill)
    : [];

  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">وضعیت شغلی</h3>
      </div>
      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500">
          <tbody>
            <tr>
              <td className="py-2 min-w-36text-gray-600 font-normal">شغل</td>
              <td className="py-2 min-w-72 w-full text-gray-800 font-normal">
                {user?.user?.personal_info?.job_title}
              </td>
              <td className="py-2 text-end min-w-24">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td className="py-2 text-gray-600 font-normal">وضعیت زمان</td>
              <td className="py-2 text-gray-800 font-normal">
                {user?.user?.personal_info?.job_type === 'full-time' ? (
                  <>
                    <span>تمام وقت</span>
                  </>
                ) : (
                  user?.user?.personal_info?.job_type
                )}
              </td>
              <td className="py-2 text-end">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td className="py-2text-gray-600 font-normal">دپارتمان </td>
              <td className="py-2 text-gray-800  ">{user?.user?.personal_info?.job_department}</td>
              <td className="py-2 text-end">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td className="py-3 text-gray-600 font-normal">مهارت ها</td>
              <td className="py-3 text-gray-700">
                {skillArray.length > 0 ? (
                  <div className="flex flex-wrap gap-2.5">
                    {skillArray.map((skill: any, index: any) => (
                      <span
                        key={index}
                        className="badge badge-sm badge-gray-200 hover:scale-x-90 select-none transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-gray-500">مهارتی ثبت نشده</span>
                )}
              </td>

              <td className="py-3 text-end">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td className="py-4 text-gray-600 font-normal">درباره</td>
              <td className="py-4 text-gray-800 font-normal">
                {user?.user?.personal_info?.short_bio}
              </td>
              <td className="py-4 text-end">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Work };
