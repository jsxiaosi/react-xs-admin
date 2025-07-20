import { useMemo, useState } from 'react';
import { useAppSelector } from '@/store/hooks';

export interface RightClickTags {
  text: string;
  disabled: boolean;
  code: 'refresh' | 'close' | 'closeOther' | 'closeLeftOther' | 'closeRightOther';
}

export const useTabsState = (pathKey: string, openDropdown: boolean) => {
  const multiTabs = useAppSelector(state => state.route.multiTabs);

  const [rightClickTags] = useState<RightClickTags[]>([
    {
      text: '刷新',
      disabled: false,
      code: 'refresh',
    },
    {
      text: '关闭',
      disabled: false,
      code: 'close',
    },
    {
      text: '关闭其他标签',
      disabled: false,
      code: 'closeOther',
    },
    {
      text: '关闭左侧其他标签',
      disabled: false,
      code: 'closeLeftOther',
    },
    {
      text: '关闭右侧其他标签',
      disabled: false,
      code: 'closeRightOther',
    },
  ]);

  const getDisabledStatus = (code: string, multFindIndex: number, multlength: number) => {
    const isFirstTab = multFindIndex === 0 && multlength > 1;
    const isLastTab = multFindIndex === multlength - 1 && multlength > 1;
    const isOnlyTab = multlength === 1;

    const disableCodesForOnlyTab = ['close', 'closeOther', 'closeLeftOther', 'closeRightOther'];

    if (isFirstTab && code === 'closeLeftOther') return true;
    if (isLastTab && code === 'closeRightOther') return true;
    if (isOnlyTab && disableCodesForOnlyTab.includes(code)) return true;

    return false;
  };

  const rightClickTagsList = useMemo(() => {
    const multFindIndex = multiTabs.findIndex(i => i.key === pathKey);
    const multlength = multiTabs.length;

    return rightClickTags.map(item => ({
      ...item,
      disabled: getDisabledStatus(item.code, multFindIndex, multlength),
    }));
  }, [openDropdown]);

  const menuItems = useMemo(() => {
    return rightClickTagsList.map(i => {
      return {
        label: i.text,
        key: i.code,
        disabled: i.disabled,
      };
    });
  }, [rightClickTagsList]);

  return { menuItems, rightClickTagsList };
};
