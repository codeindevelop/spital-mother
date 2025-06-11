// src/modules/page/forms/blocks/publish/PublishDate.tsx
import { KeenIcon } from '@/components';
import { CommonHexagonBadge } from '@/partials/common';
import { useEffect, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { FormikProps } from 'formik';
import { Calendar } from '@/components/ui/calendar';
import { format, parse } from 'date-fns-jalali';

import { cn } from '@/lib/utils';

interface PublishDateProps {
  formik: FormikProps<any>;
}

function PublishDate({ formik }: PublishDateProps) {
  const [date, setDate] = useState<Date | undefined>();
  const [useCustomDate, setUseCustomDate] = useState(false);

  // تبدیل تاریخ شمسی به میلادی برای ارسال به سرور
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      const gregorianDate = toGregorian(selectedDate);
      formik.setFieldValue('published_at', gregorianDate.toISOString());
    } else {
      formik.setFieldValue('published_at', '');
    }
  };

  // تنظیم تاریخ امروز به‌صورت پیش‌فرض
  useEffect(() => {
    if (!useCustomDate) {
      const today = new Date();
      formik.setFieldValue('published_at', today.toISOString());
    }
  }, [useCustomDate, formik]);

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">تاریخ انتشار</h3>
      </div>
      <div className="card-body">
        <div className="flex flex-col gap-4">
          <p className="text-xs leading-6 flex justify-center items-center gap-3 w-full">
            <CommonHexagonBadge
              stroke="stroke-gray-300"
              fill="fill-gray-100"
              size="size-[50px]"
              badge={<KeenIcon icon="time" className="text-xl text-gray-500" />}
            />
            با فعال‌سازی این گزینه، می‌توانید یک تاریخ برای نمایش صفحه انتخاب کنید تا در آن تاریخ
            صفحه منتشر گردد
          </p>
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap rounded-lg select-none transition-all duration-300 hover:shadow-lg gap-2.5 px-3.5 py-2.5 border-2">
            <div className="flex items-center flex-wrap lg:flex-nowrap gap-3.5">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium text-gray-900 mb-px">زمان انتشار</h4>
                <span className="text-2sm text-gray-700">
                  می‌خواهم همین الان این صفحه منتشر شود.
                </span>
              </div>
            </div>
            <label className="switch switch-sm">
              <input
                type="checkbox"
                checked={useCustomDate}
                onChange={(e) => setUseCustomDate(e.target.checked)}
              />
            </label>
          </div>
          <div className="w-full">
            <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
              <label className="form-label flex items-center gap-1 max-w-56">تاریخ انتشار</label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    id="date"
                    disabled={!useCustomDate}
                    className={cn(
                      'input data-[state=open]:border-primary font-estedad text-center rtl',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <KeenIcon icon="calendar" className="-ms-0.5" />
                    {date ? format(date, 'LLLL dd, y') : <span>انتخاب تاریخ</span>}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="single"
                    defaultMonth={date}
                    selected={date}
                    onSelect={handleDateSelect}
                    numberOfMonths={1}
                  />
                </PopoverContent>
              </Popover>
            </div>
            {formik.touched.published_at && formik.errors.published_at && (
              <div className="text-danger text-sm">{formik.errors.published_at}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishDate;
