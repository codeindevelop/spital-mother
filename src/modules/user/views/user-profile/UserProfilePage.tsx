import { Fragment } from 'react';
import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';
import { PageNavbar } from '@/pages/account';

import { UserProfileContent } from '.';
import { useLayout } from '@/providers';
import PageTitle from '@/components/page-title/PageTitle';
import { Link } from 'react-router-dom';

const UserProfilePage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      <PageTitle name="پروفایل کاربری" />
      <PageNavbar />

      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                مدیریت پروفایل کاربری شما از این صفحه انجام می شود
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Link to="/user/add" className="btn btn-sm btn-light">
                ایجاد کاربر جدید
              </Link>
              <Link to="/user/list" className="btn btn-sm btn-primary">
                لیست تمام کاربران
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <UserProfileContent />
      </Container>
    </Fragment>
  );
};

export { UserProfilePage };
