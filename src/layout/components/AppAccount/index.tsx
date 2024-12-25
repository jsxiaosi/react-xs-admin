import avatar from '@/assets/avatar.png';
import { useAppDispatch } from '@/store/hooks';
import { setSignOut } from '@/store/modules/user';
import { removeStorage } from '@/utils/storage';
import { Dropdown, Image } from 'antd';
import { useNavigate } from 'react-router';
import type { MenuProps } from 'antd';
import { getAccountStyle } from './style';

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

  const memuChange: MenuProps['onClick'] = _e => {
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
        <div className="wave">
          <Image src={avatar} width={30} preview={false} />
        </div>
      </Dropdown>
    </AccountDiv>
  );
};

export default AppAccount;
