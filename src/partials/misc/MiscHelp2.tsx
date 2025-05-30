import { Fragment } from 'react';

import { toAbsoluteUrl } from '@/utils';

import { MiscEngage } from '.';

const MiscHelp2 = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 lg:gap-7.5">
      <MiscEngage
        title="نقش کاربران ؟"
        description="برای  مدیریت نقش های کاربران به مرکز مدیریت نقش کاربران مراجعه کنید."
        image={
          <Fragment>
            <img
              src={toAbsoluteUrl('/media/illustrations/29.svg')}
              className="dark:hidden max-h-[150px]"
              alt=""
            />
            <img
              src={toAbsoluteUrl('/media/illustrations/29-dark.svg')}
              className="light:hidden max-h-[150px]"
              alt=""
            />
          </Fragment>
        }
        more={{ title: 'مدیریت نقش ها', url: '/user/roles' }}
      />

      <MiscEngage
        title="مدیریت دسترسی ها"
        description="برای  مدیریت دسترسی ها به مرکز مدیریت دسترسی ها مراجعه کنید."
        image={
          <Fragment>
            <img
              src={toAbsoluteUrl('/media/illustrations/31.svg')}
              className="dark:hidden max-h-[150px]"
              alt=""
            />
            <img
              src={toAbsoluteUrl('/media/illustrations/31-dark.svg')}
              className="light:hidden max-h-[150px]"
              alt=""
            />
          </Fragment>
        }
        more={{ title: 'مدیریت دسترسی ها', url: '/user/permissions' }}
      />
    </div>
  );
};

export { MiscHelp2 };
