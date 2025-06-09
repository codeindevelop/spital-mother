import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { toAbsoluteUrl } from '@/utils/Assets';

const StartNow = () => {
  return (
    <Fragment>
      <style>
        {`
          .start-now-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-5.png')}');
          }
          .dark .start-now-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-5-dark.png')}');
          }
        `}
      </style>

      <div className="card flex-col gap-5 justify-between bg-[center_top_1.3rem] bg-no-repeat p-5 lg:p-[80px] px-5 start-now-bg bg-[length:700px]">
        <div className="text-center">
          <h3 className="text-gray-900 text-md font-semibold leading-8 mb-1.5">
            تنظیمات و گزارش های سامانه را
            <br />
            بازبینی کنید تا در جریان کارکرد سیستم باشید
          </h3>

          <span className="text-gray-700 text-sm block mb-5">
            گزارشات سیستم به صورت خودکار توسط سامانه گردآوری می شود
          </span>

          <Link to="/setting/default" className="btn btn-light btn-sm">
            گزارش تنظیمات
          </Link>
        </div>

        {/* <div className="text-center">
          <img
            src={toAbsoluteUrl('/media/images/2600x1200/3.png')}
            className="dark:hidden max-h-[300px]"
            alt=""
          />
          <img
            src={toAbsoluteUrl('/media/images/2600x1200/3-dark.png')}
            className="light:hidden max-h-[300px]"
            alt=""
          />
        </div> */}
      </div>
    </Fragment>
  );
};

export { StartNow };
