import { FormikProps } from 'formik';

interface SeparatorSettingsBlockProps {
  formik: FormikProps<any>;
}

function SeparatorSettingsBlock({ formik }: SeparatorSettingsBlockProps) {
  const separators = ['-', '|', '–', '—', ':', '·', '•', '*', '⋆', '~', '«', '»', '>', '<']; // محدود به - و | طبق بک‌اند

  const handleSeparatorClick = (separator: string) => {
    formik.setFieldValue('title_separator', separator);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">تنظیمات جداکننده</h3>
      </div>
      <div className="card-body">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">جداکننده عنوان سایت</label>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-2 justify-center items-center">
          {separators.map((separator) => (
            <button
              key={separator}
              type="button"
              className={`btn btn-light flex justify-center items-center ${
                formik.values.title_separator === separator ? 'border-success border-2' : ''
              }`}
              onClick={() => handleSeparatorClick(separator)}
            >
              {separator}
            </button>
          ))}
        </div>
        {formik.touched.title_separator && typeof formik.errors.title_separator === 'string' && (
          <div className="text-danger text-sm">{formik.errors.title_separator}</div>
        )}
      </div>
    </div>
  );
}

export default SeparatorSettingsBlock;
