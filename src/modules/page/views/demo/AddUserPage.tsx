import { Fragment } from 'react';

import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { useLayout } from '@/providers';
import { Link } from 'react-router-dom';
import { UserPagesNavbar } from '../../menu/PagesNavbar';
import { AddUserPageContent } from './AddUserPageContent';

const AddUserPage = () => {
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
              <Link to="/user/create" className="btn btn-sm btn-primary">
                <i className="ki-outline ki-plus text-lg me-1"></i>
                ایجاد کاربر جدید
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <AddUserPageContent />
      </Container>
    </Fragment>
  );
};

export { AddUserPage };
