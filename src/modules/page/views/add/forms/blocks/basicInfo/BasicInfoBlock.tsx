import { FormikProps } from 'formik';

interface BasicInfoBlockProps {
  formik: FormikProps<any>;
}

function BasicInfoBlock({ formik }: BasicInfoBlockProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">اطلاعات پایه</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">نام صفحه</label>
          <div className="w-full">
            <input
              className="input"
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title &&
              formik.errors.title &&
              typeof formik.errors.title === 'string' && (
                <div className="text-danger text-sm">{formik.errors.title}</div>
              )}
            {formik.touched.title && Array.isArray(formik.errors.title) && (
              <div className="text-danger text-sm">{formik.errors.title.join(', ')}</div>
            )}
          </div>
        </div>
        <hr />
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">توضیحات</label>
          <div className="w-full">
            <textarea
              className=" input leading-6 p-2 h-[120px]  "
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-danger text-sm">{formik.errors.description}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfoBlock;
