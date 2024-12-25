import { initAsyncRoute } from '@/router/utils';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPower } from '@/store/modules/user';
import { Button } from 'antd';

const Permissions = () => {
  const dispatch = useAppDispatch();

  const power = useAppSelector(state => state.user.power);

  const setCount = async () => {
    const newPower = power === 'admin' ? 'test' : 'admin';
    dispatch(setPower(newPower));
    initAsyncRoute(newPower);
  };

  return (
    <Button type="primary" onClick={setCount}>
      {power} 切换权限
    </Button>
  );
};

export default Permissions;
