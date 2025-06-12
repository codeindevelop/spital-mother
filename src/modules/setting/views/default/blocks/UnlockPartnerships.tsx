import { Link } from 'react-router-dom';

import { toAbsoluteUrl } from '@/utils/Assets';

const UnlockPartnerships = () => {
  return (
    <div className="card">
      <div className="card-body px-10 py-7.5 lg:pe-12.5">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.2rem] leading-8 font-semibold text-gray-900">
              بررسی احراز هویت <br />
              User Authentication Review
            </h2>

            <p className="text-sm text-gray-700 leading-5.5">
              کاربران می‌توانند با احراز هویت خود، به صورت امن و مطمئن به پرتال متصل شوند و از خدمات
              آن بهره‌مند شوند. این فرآیند شامل بررسی هویت کاربر و تأیید اعتبار آن است که به افزایش
              امنیت و اعتماد در پرتال کمک می‌کند.
            </p>
          </div>

          <img
            src={toAbsoluteUrl('/media/illustrations/1.svg')}
            className="dark:hidden max-h-[160px]"
            alt=""
          />
          <img
            src={toAbsoluteUrl('/media/illustrations/1-dark.svg')}
            className="light:hidden max-h-[160px]"
            alt=""
          />
        </div>
      </div>

      <div className="card-footer justify-center">
        <Link to="/user/verification/get-started" className="btn btn-primary flex justify-center">
          شروع بررسی احراز هویت
        </Link>
      </div>
    </div>
  );
};

export { UnlockPartnerships };
