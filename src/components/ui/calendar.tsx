'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker, getDateLib } from 'react-day-picker/persian';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3 font-estedad    rtl  ', className)}
      // classNames={{
      //   // months: 'flex flex-wrap gap-10    sm:flex-row space-x-4 sm:space-x-4 sm:space-y-0',
      //   month: 'space-y-4 flex',
      //   caption: 'flex justify-center pt-1 relative items-center',
      //   caption_label: 'text-sm font-medium flex justify-center items-center',
      //   nav: 'space-x-1 flex items-start ltr justify-center',
      //   nav_button: cn(
      //     buttonVariants({ variant: 'light' }),
      //     'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
      //   ),
      //   nav_button_previous: '  right-1',
      //   nav_button_next: '  right-1',
      //   table: 'w-full border-collapse space-y-1 flex justify-center',
      //   head_row: 'flex',
      //   head_cell: 'text-muted-foreground rounded-md w-8  text-[0.8rem]',
      //   row: 'flex w-full mt-2',
      //   cell: 'size-8 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-danger [&:has([aria-selected])]:bg-danger first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
      //   day: cn(
      //     buttonVariants({ variant: 'ghost' }),
      //     'size-3 p-4 text-sm font-normal aria-selected:opacity-100 '
      //   ),
      //   day_range_end: 'day-range-end',
      //   day_selected:
      //     'bg-success text-danger text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
      //   day_today: 'bg-accent text-accent-foreground text-danger',
      //   day_outside:
      //     'day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
      //   day_disabled: 'text-muted-foreground opacity-50',
      //   day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground text-danger',
      //   day_hidden: 'invisible',
      //   ...classNames
      // }}
      // Removed unsupported IconLeft and IconRight from components
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
