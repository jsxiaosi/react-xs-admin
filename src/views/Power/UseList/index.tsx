import { Button } from 'antd';
import { initAsyncRoute } from '@/router/utils';

const UseList = () => {
  const setCount = async () => {
    initAsyncRoute('test');
  };
  return (
    <Button type="primary" onClick={setCount}>
      切换权限
    </Button>
  );
};

export default UseList;
