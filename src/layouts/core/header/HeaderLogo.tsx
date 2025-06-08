import { Link } from 'react-router-dom';
import { KeenIcon } from '@/assets/keenicons';
import { toAbsoluteUrl } from '@/utils';

import { useLayoutContext } from '../';

const HeaderLogo = () => {
  const { setMobileSidebarOpen, setMobileMegaMenuOpen, megaMenuEnabled } = useLayoutContext();

  const handleSidebarOpen = () => {
    setMobileSidebarOpen(true);
  };

  const handleMegaMenuOpen = () => {
    setMobileMegaMenuOpen(true);
  };

  return (
    <div className="flex gap-1 lg:hidden items-center -ms-1">
      <Link to="/" className="shrink-0">
        <img
          src={toAbsoluteUrl('/media/logo/logo.svg')}
          className="max-h-[25px] w-full"
          alt="spital logo"
        />
      </Link>

      <div className="flex items-center">
        <button
          type="button"
          className="btn btn-icon btn-light btn-clear btn-sm"
          onClick={handleSidebarOpen}
        >
          <KeenIcon icon="menu" />
        </button>

        {megaMenuEnabled && (
          <button
            type="button"
            className="btn btn-icon btn-light btn-clear btn-sm"
            onClick={handleMegaMenuOpen}
          >
            <KeenIcon icon="burger-menu-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export { HeaderLogo };
