import { Fragment } from 'react';

import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { UsersListContent } from '.';
import { useLayout } from '@/providers';
import { Link } from 'react-router-dom';
import { UserPagesNavbar } from '../../menu/PagesNavbar';

const UsersListPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      <UserPagesNavbar />

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
              <Link to="/user/add" className="btn btn-sm btn-primary">
                <i className="ki-outline ki-plus text-lg me-1"></i>
                ایجاد کاربر جدید
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <UsersListContent />
      </Container>
    </Fragment>
  );
};

export { UsersListPage };
