import { Fragment } from 'react';

import { toAbsoluteUrl } from '@/utils/Assets';
import { KeenIcon } from '@/components';
import { Container } from '@/components/container';

import { UserProfileHero } from '@/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { PageMenu } from '@/pages/users';

import { UsersDefaultContent } from '.';
import { Link } from 'react-router-dom';

const UsersDefaultPage = () => {
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
        name="گزارش احراز هویت"
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
            <Link to="/user/list" type="button" className="btn btn-sm btn-light">
              <KeenIcon icon="users" /> مشاهده کاربران
            </Link>
            <Link to="/user/add" type="button" className="btn btn-sm btn-primary">
              <KeenIcon icon="plus-circle" /> ایجاد کاربر جدید
            </Link>
            {/* <button className="btn btn-sm btn-icon btn-light">
              <KeenIcon icon="messages" />
            </button>
            <NavbarDropdown /> */}
          </NavbarActions>
        </Navbar>
      </Container>

      <Container>
        <UsersDefaultContent />
      </Container>
    </Fragment>
  );
};

export { UsersDefaultPage };
