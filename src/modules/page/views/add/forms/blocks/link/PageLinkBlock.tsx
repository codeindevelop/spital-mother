// src/modules/page/forms/blocks/link/PageLinkBlock.tsx
import { useState, useEffect } from 'react';
import { KeenIcon } from '@/components';
import { CommonHexagonBadge } from '@/partials/common';
import { FormikProps } from 'formik';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import axios from 'axios';
import cruds from '../../../../../cruds';
import { toast } from 'sonner';

interface PageLinkBlockProps {
  formik: FormikProps<any>;
}

interface Page {
  id: string;
  title: string;
  slug: string;
}

function PageLinkBlock({ formik }: PageLinkBlockProps) {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasParent, setHasParent] = useState(false);

  useEffect(() => {
    if (hasParent) {
      setLoading(true);
      const token = localStorage.getItem('accessToken');
      axios
        .get(cruds.pagesListsUrl, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
          const fetchedPages = response.data.data.pages.data || [];

          setPages(fetchedPages);
        })
        .catch(() => {
          toast.error('خطا در بارگذاری صفحات والد');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setPages([]); // وقتی hasParent false باشه، صفحات رو خالی کن
    }
  }, [hasParent]);

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">لینک صفحه</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap rounded-lg select-none transition-all duration-300 hover:shadow-lg gap-2.5 px-3.5 py-2.5 border-2">
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-3.5">
            <CommonHexagonBadge
              stroke="stroke-gray-300"
              fill="fill-gray-100"
              size="size-[50px]"
              badge={<KeenIcon icon="data" className="text-xl text-gray-500" />}
            />
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-medium text-gray-900 mb-px">صفحه فرزند</h4>
              <span className="text-2sm text-gray-700">
                آیا این صفحه دارای لینک والد می‌باشد و باید زیرمجموعه یک لینک دیگر شود؟
              </span>
            </div>
          </div>
          <label className="switch switch-sm">
            <input
              type="checkbox"
              checked={hasParent}
              onChange={(e) => {
                setHasParent(e.target.checked);
                formik.setFieldValue('parent_id', null);
              }}
            />
          </label>
        </div>
        {hasParent && (
          <div className="flex items-center flex-wrap gap-2.5">
            <label className="form-label max-w-56">آدرس لینک پدر</label>
            <div className="grow">
              <Select
                onValueChange={(value) => {
                  console.log('Selected parent_id:', value); // دیباگ: انتخاب گزینه
                  formik.setFieldValue('parent_id', value);
                }}
                disabled={loading}
                value={formik.values.parent_id || ''} // اطمینان از مقدار پیش‌فرض
              >
                <SelectTrigger>
                  <SelectValue placeholder={loading ? 'در حال بارگذاری...' : 'انتخاب کنید'} />
                </SelectTrigger>
                <SelectContent>
                  {pages.length === 0 && !loading ? (
                    <div className="text-center text-sm text-gray-500">هیچ صفحه‌ای یافت نشد</div>
                  ) : (
                    pages.map((page) => (
                      <SelectItem key={page.id} value={page.id}>
                        {page.title} ({page.slug})
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              {formik.touched.parent_id &&
                formik.errors.parent_id &&
                (typeof formik.errors.parent_id === 'string' ? (
                  <div className="text-danger text-sm">{formik.errors.parent_id}</div>
                ) : Array.isArray(formik.errors.parent_id) ? (
                  formik.errors.parent_id.map((err, idx) =>
                    typeof err === 'string' ? (
                      <div className="text-danger text-sm" key={idx}>
                        {err}
                      </div>
                    ) : null
                  )
                ) : null)}
            </div>
          </div>
        )}
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">آدرس لینک</label>
          <div className="w-full">
            <input
              className="input"
              type="text"
              name="slug"
              value={formik.values.slug}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.slug &&
              formik.errors.slug &&
              (typeof formik.errors.slug === 'string' ? (
                <div className="text-danger text-sm">{formik.errors.slug}</div>
              ) : Array.isArray(formik.errors.slug) ? (
                formik.errors.slug.map((err, idx) =>
                  typeof err === 'string' ? (
                    <div className="text-danger text-sm" key={idx}>
                      {err}
                    </div>
                  ) : null
                )
              ) : null)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLinkBlock;
