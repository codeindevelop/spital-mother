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

import { SeoRepresentationPageContent } from './SeoRepresentationPageContent';

const SeoRepresentationPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      {currentLayout?.name === 'demo4-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <p className="text-md font-medium  ">
                  نوع معرفی سایت خود را برای موتورهای جستجو مشخص کنید
                </p>
              </ToolbarDescription>
            </ToolbarHeading>
            {/* <ToolbarActions>
              <Link to="/user/create" className="btn btn-sm btn-primary">
                <i className="ki-outline ki-plus text-lg me-1"></i>
                ایجاد کاربر جدیدSeoRepresentationPage
              </Link>
            </ToolbarActions> */}
          </Toolbar>
        </Container>
      )}

      <Container>
        <SeoRepresentationPageContent />
      </Container>
    </Fragment>
  );
};

export { SeoRepresentationPage };
