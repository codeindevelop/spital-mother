import Box from './Box';

type Props = {
  formik: any; // Replace 'any' with the actual type of formik if available
};

function ViewMode({ formik }: Props) {
  return (
    <div className="w-full flex flex-col  p-5  gap-5  rounded-lg select-none transition-all duration-300       border-2">
      <h2 className=" font-bold text-sm">نحوه نمایش صفحه در گوگل </h2>
      <div className="flex gap-5 flex-col lg:flex-row justify-center items-center w-full">
        <div className="flex flex-col w-full lg:w-fit  items-start flex-wrap lg:flex-nowrap gap-5">
          <div className="flex items-center gap-2 w-full">
            <label className="switch switch-sm w-full flex justify-between ">
              <span className="text-xs text-gray-500">
                <span className="text-gray-700 text-sx font-medium leading-6">
                  پیش نمایش موبایل{' '}
                </span>
              </span>
              <input
                type="checkbox"
                className=" "
                name="create_password"
                //   checked={enableRandomPassword}
                onChange={(e) => {
                  formik.setFieldValue('create_password', e.target.checked);
                  if (e.target.checked) {
                    // حذف فیلدهای password و password_confirmation
                    formik.setFieldValue('password', undefined);
                    formik.setFieldValue('password_confirmation', undefined);
                  }
                }}
              />
            </label>
          </div>
          <div className="flex items-center gap-2 w-full">
            <label className="switch switch-sm flex w-full justify-between">
              <span className="text-xs text-gray-500">
                <span className="text-gray-700 text-sx font-medium leading-6">
                  پیش نمایش نمایشگر بزرگ{' '}
                </span>
              </span>
              <input
                type="checkbox"
                name="create_password"
                className="w-full"
                //   checked={enableRandomPassword}
                onChange={(e) => {
                  formik.setFieldValue('create_password', e.target.checked);
                  if (e.target.checked) {
                    // حذف فیلدهای password و password_confirmation
                    formik.setFieldValue('password', undefined);
                    formik.setFieldValue('password_confirmation', undefined);
                  }
                }}
              />
            </label>
          </div>
        </div>
        {/* Begin Viewer in google */}
        <Box />
        {/* End Viewer in google */}
      </div>
    </div>
  );
}

export default ViewMode;
