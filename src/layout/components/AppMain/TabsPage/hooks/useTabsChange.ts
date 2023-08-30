import { useLocation, useNavigate } from 'react-router-dom';
import type { RightClickTags } from './useTabsState';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setStoreMultiTabs, type MultiTabsType } from '@/store/modules/route';
import { useRefresh } from '@/hooks/web/useRefresh';

export const useTabsChange = () => {
  const multiTabs = useAppSelector((state) => state.route.multiTabs);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { refresh } = useRefresh();

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
    const item = multiTabs.findIndex((i) => i.key === pathKey);
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

    handleTabsList(pathKey, 'delete');
  };

  const closeTabsRoute = (pathKey: string, type: 'other' | 'left' | 'right') => {
    const selectItemIndex = multiTabs.findIndex((i) => i.key === pathKey);
    const mapList = multiTabs.filter((i, index) => {
      if (i.key !== pathKey && type === 'other') return true;
      else if (index < selectItemIndex && type === 'left') return true;
      else if (index > selectItemIndex && type === 'right') return true;
      return false;
    });
    if (mapList.find((i) => i.key === getCurrentPathname())) {
      const { key } = multiTabs[selectItemIndex];
      navigate(key);
    }
    mapList.forEach((i) => i.key && handleTabsList(i.key, 'delete'));
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

  return { onTabsDropdownChange, addRouteTabs, removeTab };
};
