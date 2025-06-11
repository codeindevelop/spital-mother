import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { FormikProps } from 'formik';

interface RobotsProps {
  formik: FormikProps<any>;
}

function Robots({ formik }: RobotsProps) {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-medium text-sm text-gray-800">
        موتورهای جستجو و ربات‌های جستجو نسبت به محتوای این صفحه چه نوع رفتاری نمایش دهند را انتخاب
        کنید
      </p>
      <div className="flex items-center flex-wrap gap-2.5">
        <label className="form-label max-w-56">موتورهای جستجو این صفحه را نمایش دهند؟</label>
        <div className="grow">
          <Select
            value={formik.values.seo?.robots_index || 'index'}
            onValueChange={(value) => formik.setFieldValue('seo.robots_index', value)}
          >
            <SelectTrigger onBlur={() => formik.setFieldTouched('seo.robots_index', true)}>
              <SelectValue placeholder="انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="index">در جستجوها نمایش داده شود</SelectItem>
              <SelectItem value="noindex">در جستجوها نمایش داده نشود</SelectItem>
            </SelectContent>
          </Select>
          {formik.touched.seo &&
            typeof formik.touched.seo === 'object' &&
            (formik.touched.seo as any).robots_index &&
            formik.errors.seo &&
            typeof formik.errors.seo === 'object' &&
            (formik.errors.seo as any).robots_index && (
              <div className="text-danger text-sm">{(formik.errors.seo as any).robots_index}</div>
            )}
        </div>
      </div>
      <hr />
      <div className="flex items-center flex-wrap gap-2.5">
        <label className="form-label max-w-56">موتورهای جستجو این صفحه را دنبال کنند؟</label>
        <div className="grow">
          <Select
            value={formik.values.seo?.robots_follow || 'follow'}
            onValueChange={(value) => formik.setFieldValue('seo.robots_follow', value)}
          >
            <SelectTrigger onBlur={() => formik.setFieldTouched('seo.robots_follow', true)}>
              <SelectValue placeholder="انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="follow">صفحه همیشه دنبال شود</SelectItem>
              <SelectItem value="nofollow">صفحه هیچ‌وقت دنبال نشود</SelectItem>
            </SelectContent>
          </Select>
          {formik.touched.seo &&
            typeof formik.touched.seo === 'object' &&
            (formik.touched.seo as any).robots_follow &&
            formik.errors.seo &&
            typeof formik.errors.seo === 'object' &&
            (formik.errors.seo as any).robots_follow && (
              <div className="text-danger text-sm">{(formik.errors.seo as any).robots_follow}</div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Robots;
