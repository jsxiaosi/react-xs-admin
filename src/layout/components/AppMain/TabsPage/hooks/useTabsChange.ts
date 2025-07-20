import { useKeepAliveContext } from 'keepalive-for-react';
import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { type MultiTabsType, setStoreMultiTabs } from '@/store/modules/route';
import type { RightClickTags } from './useTabsState';

export const useTabsChange = () => {
  const multiTabs = useAppSelector(state => state.route.multiTabs);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { refresh } = useRefresh();
  const { refresh, destroy } = useKeepAliveContext();

  const handleTabsList = (pathName: string, type: 'add' | 'delete') => {
    dispatch(
      setStoreMultiTabs({
        type,
        tabs: {
          key: pathName,
        },
      }),
    );
  };

  const getCurrentPathname = (): string => {
    return location.pathname + location.search;
  };

  // 添加标签
  const addRouteTabs = () => {
    handleTabsList(getCurrentPathname(), 'add');
  };

  // 关闭当前导航
  const removeTab = (pathKey: string) => {
    const item = multiTabs.findIndex(i => i.key === pathKey);
    const tabsLength = multiTabs.length;

    let value: MultiTabsType;
    if (multiTabs[item].key === getCurrentPathname()) {
      if (item === tabsLength - 1) {
        value = multiTabs[item - 1];
      } else {
        value = multiTabs[tabsLength - 1];
      }
      navigate(value.key);
    }

    destroy(pathKey);
    handleTabsList(pathKey, 'delete');
  };

  const closeTabsRoute = (pathKey: string, type: 'other' | 'left' | 'right') => {
    const selectItemIndex = multiTabs.findIndex(i => i.key === pathKey);
    const mapList = multiTabs.filter((i, index) => {
      if (i.key !== pathKey && type === 'other') return true;
      else if (index < selectItemIndex && type === 'left') return true;
      else if (index > selectItemIndex && type === 'right') return true;
      return false;
    });
    if (mapList.find(i => i.key === getCurrentPathname())) {
      const { key } = multiTabs[selectItemIndex];
      navigate(key);
    }

    mapList.forEach(i => {
      destroy(i.key);
      i.key && handleTabsList(i.key, 'delete');
    });
  };

  const onTabsDropdownChange = (code: RightClickTags['code'], pathKey: string) => {
    switch (code) {
      case 'refresh':
        refresh(pathKey);
        break;
      case 'close':
        removeTab(pathKey);
        break;
      case 'closeLeftOther':
        closeTabsRoute(pathKey, 'left');
        break;
      case 'closeRightOther':
        closeTabsRoute(pathKey, 'right');
        break;
      case 'closeOther':
        closeTabsRoute(pathKey, 'other');
        break;
      default:
        break;
    }
  };

  return { onTabsDropdownChange, addRouteTabs, removeTab, refresh };
};
