import { FormikProps } from 'formik';

import PublishStatus from './PublishStatus';
import PublishMode from './PublishMode';
// import PublishDate from './PublishDate';

interface PublishPageModeBlockProps {
  formik: FormikProps<any>;
}

function PublishPageModeBlock({ formik }: PublishPageModeBlockProps) {
  return (
    <>
      <PublishStatus formik={formik} />
      <PublishMode formik={formik} />
      {/* <PublishDate formik={formik} /> */}
    </>
  );
}

export default PublishPageModeBlock;
