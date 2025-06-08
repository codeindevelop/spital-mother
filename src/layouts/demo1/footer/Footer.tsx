import { KeenIcon } from '@/components';
import { Container } from '@/components/container';
import { generalSettings } from '@/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer px-10 tracking-normal">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 py-5">
        <div className="flex order-2 md:order-1  gap-2 font-normal text-2sm">
          <span className="text-gray-500 font-black select-none ">سامانه مدیریت پرتال اسپیتال</span>
          <p className="text-gray-600   font-medium select-none  ">
            طراحی و تولید با{' '}
            <span>
              <KeenIcon
                icon="heart"
                className="text-danger mr-1 animate-pulse transition-all duration-1000"
              />
            </span>{' '}
            <a href="https://abrecode.com" target="_blank" className="mx-1 hover:text-primary">
              {' '}
              توسط ابریکُد
            </a>
            <span className="text-gray-500 mx-1 font-pop tracking-normal">{currentYear}&copy;</span>
          </p>
        </div>
        <nav className="flex order-1 md:order-2 gap-4 font-normal text-2sm text-gray-600">
          <a href={generalSettings.purchaseLink} target="_blank" className="hover:text-primary">
            راهنمای سامانه
          </a>
          <a href={generalSettings.purchaseLink} target="_blank" className="hover:text-primary">
            خرید سامانه
          </a>
          <a href={generalSettings.faqLink} target="_blank" className="hover:text-primary">
            سوالات متداول
          </a>
          <a href="https://devs.abrecode.com" target="_blank" className="hover:text-primary">
            پشتیبانی پرتال
          </a>
          {/* <a href={generalSettings.licenseLink} target="_blank" className="hover:text-primary">
            لایسنس استفاده
          </a> */}
        </nav>
      </div>
    </footer>
  );
};

export { Footer };
