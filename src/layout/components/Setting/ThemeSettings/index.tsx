import { memo } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import './index.less';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAppColor } from '@/store/modules/app';

const ThemeSettings = memo(() => {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.app.color);

  const colorList = ['#722ed1', '#eb2f96', '#52c41a', '#13c2c2', '#fadb14', '#fa541c', '#f5222d'];

  return (
    <div className="theme-settings">
      <div className="color-list">
        {colorList.map((i) => {
          return (
            <div
              className="cursor color-list-item"
              style={{ backgroundColor: i }}
              key={i}
              onClick={() => {
                dispatch(setAppColor(i));
              }}
            >
              {color === i && <CheckOutlined />}
              {/* <SvgIcon v-if="i === pureColor" class="icon" name="iEL-select" /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ThemeSettings;
