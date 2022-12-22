import { useDispatch } from 'react-redux';
import { setStoreMultiTabs } from '@/store/modules/route';

export const useInfoPageTabs = () => {
  const dispatch = useDispatch();
  const handleTabs = (pateType: 'qurey' | 'params', type: 'add' | 'update', id: number) => {
    let tabs;

    if (pateType === 'params') {
      tabs = {
        key: `/details-page/details-params/${id}`,
        label: `详情页Params-${id}`,
      };
    } else {
      tabs = {
        key: `/details-page/details-info?id=${id}`,
        label: `详情页-${id}`,
      };
    }
    dispatch(setStoreMultiTabs({ type, tabs }));
  };

  return { handleTabs };
};
