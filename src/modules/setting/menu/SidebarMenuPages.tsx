import clsx from 'clsx';

import { KeenIcon } from '@/assets/keenicons';
import {
  IMenuItemConfig,
  Menu,
  MenuArrow,
  TMenuConfig,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle
} from '@/components/menu';
import { useMenus } from '@/providers';

export const SidebarMenuPages = () => {
  return (
    <Menu className="flex flex-col w-full gap-px px-2.5">
      <MenuItem toggle="accordion" trigger="click"  className="flex-col">
        <MenuLink className={'py-2 pe-2.5 rounded-md border border-transparent'}>
          <MenuTitle className="text-2sm text-gray-600 menu-link-hover:text-gray-900">
            <span className="hidden menu-item-show:!flex">اول</span>
            <span className="flex menu-item-show:hidden">دوم</span>
          </MenuTitle>

          <MenuTitle className="text-2sm text-gray-800 menu-item-here:text-gray-900 menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
            اسم
          </MenuTitle>
        </MenuLink>
        {/* <MenuSub className="menu-accordion gap-px">
          {buildMenuChildren(item.children, item.collapse ? level : level + 1)}
        </MenuSub> */}
      </MenuItem>
    </Menu>
  );
};
