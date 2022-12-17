import { memo } from 'react';
import { Avatar, Divider, theme } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { CSSObject } from '@emotion/react';
import type { GlobalToken } from 'antd/es/theme/interface';
import avatar from '@/assets/avatar.png';

const getCommentItem = (token: GlobalToken): CSSObject => {
  return {
    height: 450,
    overflowY: 'auto',
    ['.item']: {
      display: 'flex',
      ['.item-content']: {
        marginLeft: 14,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        ['.title']: {
          fontSize: token.fontSize,
        },
        ['time']: {
          fontSize: token.fontSizeSM,
        },
        ['.text']: {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          ' -webkit-box-orient': 'vertical',
        },
      },
    },
  };
};

const Comment = memo(() => {
  const thme = theme.useToken();

  return (
    <div css={getCommentItem(thme.token)}>
      <ul>
        {[1, 2, 3, 4].map((i) => {
          return (
            <li key={i}>
              <div className="item">
                <Avatar size={52} icon={<UserOutlined />} src={avatar} />
                <div className="item-content">
                  <span className="title">某某某</span>
                  <span className="time">2021-12-31</span>
                  <span className="text">
                    据我观察，你今天吃意大利面遇到不良商家，没有拌42号混凝土，以及使用劣质螺丝钉，严重影响你的扭矩，从而影响UFO的产量，吸收不足引发内蜂蜜失调，导致排放系统紊乱，对整个太平洋以及充电器造成严重的核污染。我个人认为，这个意大利面就应该拌42号混凝土，因为这个螺丝钉的长度，它很容易会直接影响到挖掘机的扭矩你知道吧，你往里砸的时候，一瞬间它就会产生大量的高能蛋白。
                  </span>
                </div>
              </div>
              <Divider />
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Comment;
