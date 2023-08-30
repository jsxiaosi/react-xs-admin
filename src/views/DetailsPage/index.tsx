import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useInfoPageTabs } from './hooks/useInfoPageTabs';
import { useRefresh } from '@/hooks/web/useRefresh';

const DateilsPage = () => {
  const navigate = useNavigate();
  const { handleTabs } = useInfoPageTabs();
  const { refresh } = useRefresh();
  const qureyChange = (pateType: 'qurey' | 'params', i: number) => {
    let path = `/details-page/details-info?id=${i}`;
    if (pateType === 'params') {
      path = `/details-page/details-params/${i}`;
    }
    handleTabs(pateType, 'add', i);
    navigate(path);
  };

  useEffect(() => {
    console.log('加载了吗？');
  }, []);

  const refse = () => {
    console.log('refse');
    refresh();
  };

  return (
    <div>
      <Button onClick={refse}>刷新</Button>
      <div>
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <Button key={i} style={{ marginRight: 12 }} onClick={() => qureyChange('qurey', i)}>
              详情页-{i}
            </Button>
          );
        })}
      </div>
      <div style={{ marginTop: 12 }}>
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <Button key={i} style={{ marginRight: 12 }} onClick={() => qureyChange('params', i)}>
              详情页Params-{i}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default DateilsPage;
