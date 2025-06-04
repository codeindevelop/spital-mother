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
// import { UserPagesNavbar } from '../../menu/PagesNavbar';
import { AddNewPageContent } from './AddNewPageContent';

const CrateNewPage = () => {
  return (
    <Fragment>
      {/* <UserPagesNavbar /> */}

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <p className="text-md font-medium  ">ایجاد صفحه جدید</p>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <Link to="/user/list" className="btn btn-sm btn-light">
              <i className="ki-outline ki-menu text-lg me-1"></i>
              لیست صفحات
            </Link>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AddNewPageContent />
      </Container>
    </Fragment>
  );
};

export { CrateNewPage };
