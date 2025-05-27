import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { toAbsoluteUrl } from '@/utils';
import useBodyClasses from '@/hooks/useBodyClasses';
import { AuthBrandedLayoutProvider } from './AuthBrandedLayoutProvider';
const Layout = () => {
  // Applying body classes to manage the background color in dark mode
  useBodyClasses('dark:bg-coal-500');

  return (
    <Fragment>
      <style>
        {`
          .branded-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/1.png')}');
          }
          .dark .branded-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/1-dark.png')}');
          }
        `}
      </style>

      <div className="grid lg:grid-cols-2 grow">
        <div className="flex justify-center items-center p-8 lg:p-10 order-2 lg:order-1">
          <Outlet />
        </div>

        <div className=" justify-center items-center lg:rounded-xl lg:border lg:border-gray-200 lg:m-5 order-1 lg:order-2 bg-top xxl:bg-center xl:bg-cover bg-no-repeat branded-bg">
          <div className="flex flex-col p-8 lg:p-16 gap-4 justify-center items-center">
            <Link to="/">
              <img
                src={toAbsoluteUrl('/media/logo/logo.svg')}
                className="h-[50px] max-w-none"
                alt=""
              />
            </Link>

            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <h3 className="text-2xl font-semibold text-gray-900">
                <FormattedMessage id="AUTH.SYSTEM_NAME" />
              </h3>
              <p className="text-gray-600">
                <FormattedMessage id="AUTH.SYSTEM_DESCRIPTION" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// AuthBrandedLayout component that wraps the Layout component with AuthBrandedLayoutProvider
const AuthBrandedLayout = () => (
  <AuthBrandedLayoutProvider>
    <Layout />
  </AuthBrandedLayoutProvider>
);

export { AuthBrandedLayout };
