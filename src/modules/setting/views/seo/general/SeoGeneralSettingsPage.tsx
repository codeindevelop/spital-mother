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

import { SeoGeneralSettingsPageContent } from './SeoGeneralSettingsPageContent';

const SeoGeneralSettingsPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      {currentLayout?.name === 'demo4-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle text="تنظیمات عمومی سئو" />
              <ToolbarDescription>
                <p className="text-md font-medium  ">
                  تنظیمات عمومی سئو برای خواندن استاندارد های سات
                </p>
              </ToolbarDescription>
            </ToolbarHeading>
            {/* <ToolbarActions>
              <Link to="/user/create" className="btn btn-sm btn-primary">
                <i className="ki-outline ki-plus text-lg me-1"></i>
                ایجاد کاربر جدید
              </Link>
            </ToolbarActions> */}
          </Toolbar>
        </Container>
      )}

      <Container>
        <SeoGeneralSettingsPageContent />
      </Container>
    </Fragment>
  );
};

export { SeoGeneralSettingsPage };
