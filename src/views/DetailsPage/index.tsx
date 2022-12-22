import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useInfoPageTabs } from './hooks/useInfoPageTabs';

const DateilsPage = () => {
  const navigate = useNavigate();
  const { handleTabs } = useInfoPageTabs();
  const qureyChange = (pateType: 'qurey' | 'params', i: number) => {
    let path = `/details-page/details-info?id=${i}`;
    if (pateType === 'params') {
      path = `/details-page/details-params/${i}`;
    }
    handleTabs(pateType, 'add', i);
    navigate(path);
  };
  return (
    <div>
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
