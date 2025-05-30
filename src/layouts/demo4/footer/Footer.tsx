import { KeenIcon } from '@/components';
import { Container } from '@/components/container';
import { generalSettings } from '@/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 py-5">
          <div className="flex order-2 md:order-1  gap-2 font-normal text-2sm">
            {/* <span className="text-gray-500">{currentYear}&copy;</span> */}
            <span className="text-gray-500 font-black select-none">سامانه مدیریت پرتال اسپیتال</span>
            <a
              href="https://abrecode.com"
              target="_blank"
              className="text-gray-600 hover:text-primary  "
            >
              طراحی و تولید با{' '}
              <span>
                <KeenIcon icon="heart" className="text-danger mx-1" />
              </span>{' '}
              توسط ابریکُد.
            </a>
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
            <a href={generalSettings.licenseLink} target="_blank" className="hover:text-primary">
              لایسنس استفاده
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
