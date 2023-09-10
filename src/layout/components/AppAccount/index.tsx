import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getAccountStyle } from './style';
import avatar from '@/assets/avatar.png';
import { removeStorage } from '@/utils/storage';
import { setSignOut } from '@/store/modules/user';
import { useAppDispatch } from '@/store/hooks';

const AppAccount = () => {
  const { AccountDiv } = getAccountStyle();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '退出登录',
    },
  ];

  const memuChange: MenuProps['onClick'] = (_e) => {
    removeStorage('userInfo');
    dispatch(setSignOut());

    navigate('/login');
  };

  return (
    <AccountDiv className="cursor">
      <Dropdown
        menu={{
          items,
          onClick: memuChange,
        }}
        placement="bottom"
        arrow
      >
        <img src={avatar} className="wave" />
      </Dropdown>
    </AccountDiv>
  );
};

export default AppAccount;
