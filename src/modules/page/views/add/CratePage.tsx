// src/modules/page/views/CreatePage.tsx
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createPage } from '../../actions/pageActions';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('عنوان الزامی است'),
  slug: Yup.string().required('Slug الزامی است'),
  content: Yup.string().required('محتوا الزامی است')
});

const CreatePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.page);

  const formik = useFormik({
    initialValues: {
      title: '',
      slug: '',
      content: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      await dispatch(createPage(values)).unwrap();
      formik.resetForm();
    }
  });

  return (
    <div className="card">
      <h3 className="card-title">ایجاد پیج جدید</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label>عنوان</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-danger">{formik.errors.title}</div>
          )}
        </div>
        <div className="mb-3">
          <label>Slug</label>
          <input
            type="text"
            name="slug"
            className="form-control"
            value={formik.values.slug}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.slug && formik.errors.slug && (
            <div className="text-danger">{formik.errors.slug}</div>
          )}
        </div>
        <div className="mb-3">
          <label>محتوا</label>
          <textarea
            name="content"
            className="form-control"
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.content && formik.errors.content && (
            <div className="text-danger">{formik.errors.content}</div>
          )}
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'در حال ایجاد...' : 'ایجاد پیج'}
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
