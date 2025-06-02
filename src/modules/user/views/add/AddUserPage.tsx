import { Fragment } from 'react';

import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { Link } from 'react-router-dom';
import { UserPagesNavbar } from '../../menu/UserPagesNavbar';
import { AddUserPageContent } from './AddUserPageContent';

const AddUserPage = () => {
  return (
    <Fragment>
      <UserPagesNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <p className="text-md font-medium  ">ایجاد کاربر جدید</p>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <Link to="/user/list" className="btn btn-sm btn-light">
              <i className="ki-outline ki-menu text-lg me-1"></i>
              لیست کاربران
            </Link>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AddUserPageContent />
      </Container>
    </Fragment>
  );
};

export { AddUserPage };
