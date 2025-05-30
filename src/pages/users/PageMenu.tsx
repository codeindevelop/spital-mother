import { useMenus } from '@/providers';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';

const PageMenu = () => {
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig('primary');
  const userMenuConfig = menuConfig?.['4']?.children;

  if (userMenuConfig) {
    return <NavbarMenu items={userMenuConfig} />;
  } else {
    return <>test</>;
  }
};

export { PageMenu };
