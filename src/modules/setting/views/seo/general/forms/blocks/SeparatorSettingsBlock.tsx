import { FormikProps } from 'formik';

interface SeparatorSettingsBlockProps {
  formik: FormikProps<any>;
}

function SeparatorSettingsBlock({ formik }: SeparatorSettingsBlockProps) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-sm">تنظیمات جداکننده</h3>
        </div>
        <div className="card-body  ">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-56">جداکننده عنوان سایت </label>
          </div>

          <div className=" flex flex-wrap gap-2.5 mt-2 justify-center items-center">
            <button className="btn btn-light flex justify-center items-center">-</button>
            <button className="btn btn-light flex justify-center items-center border-success border-2">
              –
            </button>
            <button className="btn btn-light flex justify-center items-center">—</button>
            <button className="btn btn-light flex justify-center items-center">:</button>
            <button className="btn btn-light flex justify-center items-center">·</button>
            <button className="btn btn-light flex justify-center items-center">•</button>
            <button className="btn btn-light flex justify-center items-center">*</button>
            <button className="btn btn-light flex justify-center items-center">⋆</button>
            <button className="btn btn-light flex justify-center items-center">|</button>
            <button className="btn btn-light flex justify-center items-center">~</button>
            <button className="btn btn-light flex justify-center items-center">«</button>
            <button className="btn btn-light flex justify-center items-center">»</button>
            <button className="btn btn-light flex justify-center items-center">{'>'}</button>
            <button className="btn btn-light flex justify-center items-center">{'<'}</button>
            <button className="btn btn-light flex justify-center items-center">{'<<'}</button>
            <button className="btn btn-light flex justify-center items-center">{'>>'}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeparatorSettingsBlock;
