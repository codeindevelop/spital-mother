import { FormikProps } from 'formik';
import ViewMode from './viewBox/ViewMode';
import SeoTitle from './SeoTitle';

import { Accordion, AccordionItem } from '@/components/accordion';
import Keywords from './Keywords';
import Canonicals from './Canonicals';
import Robots from './Robots';
import Og from './og/Og';
import Twitter from './twitter/Twitter';
import { Link } from 'react-router-dom';

interface ISeoItem {
  title: string;
  content: any;
}

interface SeoSettingsProps {
  formik: FormikProps<any>;
}

interface ISeoItems extends Array<ISeoItem> {}

function SeoSettings({ formik }: SeoSettingsProps) {
  const items: ISeoItems = [
    {
      title: 'عنوان و توضیحات',
      content: <SeoTitle formik={formik} />
    },
    {
      title: 'کلمات کلیدی',
      content: <Keywords formik={formik} />
    },
    {
      title: 'کنونیکال Canonicals',
      content: <Canonicals formik={formik} />
    },
    {
      title: 'ربات ها',
      content: <Robots formik={formik} />
    },
    {
      title: 'نمایش در سوشال مدیا',
      content: <Og formik={formik} />
    },
    {
      title: 'نمایش در تویتر ( x )',
      content: <Twitter formik={formik} />
    }
  ];
  const generateItems = () => {
    return (
      <Accordion allowMultiple={false}>
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title}>
            <div className="w-full flex flex-col gap-3 border p-5 rounded-lg">{item.content}</div>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">اطلاعات سئو</h3>
        <div className="flex items-center gap-2">
          <label className="switch switch-sm">
            <span className="text-xs text-gray-500">
              <span className="text-gray-700 text-sx font-medium">
                استفاده از{' '}
                <Link to="/setting/seo/general" className="text-blue-500 ">
                  <span className="mx-1">تنظیمات پیش فرض</span>
                </Link>{' '}
                برای سئو
              </span>
            </span>
            <input
              type="checkbox"
              name="general_seo"
              //   checked={enableRandomPassword}
              onChange={(e) => {
                formik.setFieldValue('general_seo"', e.target.checked);
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
      <div className="card-body grid gap-5">
        <p className="text-sm leading-7 tracking-normal  font-medium">
          در این بخش تمام اطلاعاتی که نیازدارید از نظر سئو برای این صفحه تنظیم کنید را می توانید
          انجام دهید تا صفحه شما در موتورهای جستجو و شبکه های اجتماعی با تنظیمات شما نمایش داده شود
          یا نمایش داده نشود
        </p>
        <ViewMode formik={formik} />

        {generateItems()}
      </div>
    </div>
  );
}

export default SeoSettings;
