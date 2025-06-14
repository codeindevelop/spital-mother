import { Container } from '@/components/container';
import { useLayout, useMenus } from '@/providers';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';

const PageNavbar = () => {
  const { getMenuConfig } = useMenus();
  const { currentLayout } = useLayout();
  const menuConfig = getMenuConfig('primary');
  const accountMenuConfig = menuConfig?.['4']?.children;

  if (accountMenuConfig && currentLayout?.name === 'demo4-layout') {
    return (
      <Navbar>
        <Container>
          <NavbarMenu items={accountMenuConfig} />
        </Container>
      </Navbar>
    );
  } else {
    return <></>;
  }
};

export { PageNavbar };
