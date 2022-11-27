import type { RouteObject } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import type { MenuItem, RouteList } from '#/route';

export function handleRouteList(list: RouteList[]): RouteObject[] {
  return list.map((i: RouteList) => {
    const item: RouteObject = {
      path: i.path,
      id: i.id,
      element: i.element,
    };

    if (i.children) {
      item.children = handleRouteList(i.children);
      if (i.redirect && item.children.length) {
        item.children.push({
          index: true,
          loader() {
            return redirect(i.redirect || '');
          },
        });
      }
    }

    return item;
  });
}

export function routeListToMenu(rtList: RouteList[], path?: React.Key): MenuItem[] {
  return rtList.map((i: RouteList) => {
    let rtItem: MenuItem = {
      key: i.path,
      label: '',
    };
    if (path) rtItem.key = `${path}/${i.path}`;
    if (i.meta) {
      rtItem = { ...rtItem, label: i.meta.label, icon: i.meta.icon };
    }
    if (i.children) {
      rtItem.children = routeListToMenu(i.children, rtItem.key);
    }
    return rtItem;
  });
}
