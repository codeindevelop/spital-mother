import React, { forwardRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useLayoutContext } from '../';
import { toAbsoluteUrl } from '@/utils';
import { SidebarToggle } from './';

const SidebarHeader = forwardRef<HTMLDivElement, any>((props, ref) => {
  const { layout } = useLayoutContext();

  const lightLogo = () => (
    <Fragment>
      <Link to="/" className="dark:hidden">
        <img
          src={toAbsoluteUrl('/media/logo/logo-light.svg')}
          className="default-logo min-h-[30px] max-w-none"
        />
        <img
          src={toAbsoluteUrl('/media/logo/logo.svg')}
          className="small-logo h-[28px] max-w-none"
        />
      </Link>
      <Link to="/" className="hidden dark:block">
        <img
          src={toAbsoluteUrl('/media/logo/logo-dark.svg')}
          className="default-logo min-h-[30px] max-w-none"
        />
        <img
          src={toAbsoluteUrl('/media/logo/logo.svg')}
          className="small-logo h-[28px] max-w-none"
        />
      </Link>
    </Fragment>
  );

  const darkLogo = () => (
    <Link to="/">
      <img
        src={toAbsoluteUrl('/media/logo/logo-dark.svg')}
        className="default-logo min-h-[33px] max-w-none"
      />
      <img
        src={toAbsoluteUrl('/media/logo/logo.svg')}
        className="small-logo  h-[28px] max-w-none"
      />
    </Link>
  );

  return (
    <div
      ref={ref}
      className="sidebar-header hidden lg:flex items-center relative justify-center px-3 lg:px-6 shrink-0"
    >
      {layout.options.sidebar.theme === 'light' ? lightLogo() : darkLogo()}
      <SidebarToggle />
    </div>
  );
});

export { SidebarHeader };
