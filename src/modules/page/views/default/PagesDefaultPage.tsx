import { Fragment } from 'react';

import { toAbsoluteUrl } from '@/utils/Assets';
import { KeenIcon } from '@/components';
import { Container } from '@/components/container';

import { UserProfileHero } from '@/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { PageMenu } from '@/pages/users';

import { PagesDefaultContent } from '.';
import { Link } from 'react-router-dom';

const PagesDefaultPage = () => {
  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/blank.png')}
      className="rounded-full border-3 border-success size-[100px] shrink-0"
    />
  );

  return (
    <Fragment>
      {/* <PageNavbar /> */}
      <UserProfileHero
        name="گزارش صفحات"
        image={image}
        info={[
          { label: 'نام شرکت یا سایت', icon: 'abstract-41' },
          { label: 'لوکیشن', icon: 'geolocation' },
          { email: 'test@test.com', icon: 'sms' }
        ]}
      />

      <Container>
        <Navbar>
          <PageMenu />

          <NavbarActions>
            <Link to="/page/list" type="button" className="btn btn-sm btn-light">
              <KeenIcon icon="files" /> مشاهده صفحات
            </Link>
            <Link to="/page/add" type="button" className="btn btn-sm btn-primary">
              <KeenIcon icon="plus-circle" /> ایجاد صفحه جدید
            </Link>
          </NavbarActions>
        </Navbar>
      </Container>

      <Container>
        <PagesDefaultContent />
      </Container>
    </Fragment>
  );
};

export { PagesDefaultPage };
