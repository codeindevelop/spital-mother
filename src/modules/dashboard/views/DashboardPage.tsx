import { Fragment, useState } from 'react';
import { Container } from '@/components/container';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/layouts/core/toolbar';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { addDays, format } from 'date-fns';
import { cn } from '@/lib/utils';
import { KeenIcon } from '@/assets/keenicons';
import { DashboardPageContent } from './DashboardPageContent';
import PageTitle from '@/components/page-title/PageTitle';

const DashboardPage = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20)
  });

  return (
    <Fragment>
      <PageTitle name="پیشخان مدیریت" />
      <Container>
        <Toolbar>
          <ToolbarHeading title="Dashboard" description="Central Hub for Personal Customization" />
          <ToolbarActions>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  id="date"
                  className={cn(
                    'btn btn-sm btn-light data-[state=open]:bg-light-active',
                    !date && 'text-gray-400'
                  )}
                >
                  <KeenIcon icon="calendar" className="me-0.5" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(date.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <DashboardPageContent />
      </Container>
    </Fragment>
  );
};

export { DashboardPage };
