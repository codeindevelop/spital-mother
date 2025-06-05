import { FormikProps } from 'formik';

interface BasicSettingsBlockProps {
  formik: FormikProps<any>;
}

function BasicSettingsBlock({ formik }: BasicSettingsBlockProps) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-sm">نوع وب سایت</h3>
        </div>
        <div className="card-body grid gap-5">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">نوع وب سایت</label>
            <div className="flex flex-col tems-start grow gap-7.5 w-full">
              <div className="flex items-center gap-7.5">
                <label className="switch">
                  <span className="switch-label">شخصی</span>
                  <input type="checkbox" defaultChecked value="1" readOnly />
                </label>

                <label className="switch">
                  <span className="switch-label">شرکت</span>
                  <input type="checkbox" value="2" readOnly />
                </label>
              </div>

              <span className="form-info text-gray-800 text-2sm font-normal leading-6">
                با مشخص کردن نوع وب سایت، می توانید تنظیمات مربوط به سئو و نمایه سازی را بهینه کنید.
                این انتخاب به موتورهای جستجو کمک می کند تا بهتر درک کنند که محتوای شما چه نوع سایتی
                را نمایندگی می کند.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicSettingsBlock;
