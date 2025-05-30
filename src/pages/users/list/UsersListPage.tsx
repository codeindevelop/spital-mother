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

import { AccountTeamsContent } from '.';
import { useLayout } from '@/providers';
import { Link } from 'react-router-dom';

const UsersListPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      <PageNavbar />

      {currentLayout?.name === 'demo4-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <p className="text-md font-medium  ">لیست تمام کاربران سامانه به تفکیک نقش کاربر</p>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Link to="/user/create" className="btn btn-sm btn-light">
                ایجاد کاربر جدید
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <AccountTeamsContent />
      </Container>
    </Fragment>
  );
};

export { UsersListPage };
