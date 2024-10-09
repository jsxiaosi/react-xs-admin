import { useTransformTheme } from '@/hooks/useTransformTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAppColor } from '@/store/modules/app';
import { CheckOutlined } from '@ant-design/icons';
import { Switch, theme } from 'antd';
import { memo } from 'react';
import { getThemeSettingsStyle } from './style';

const ThemeSettings = memo(() => {
  const dispatch = useAppDispatch();
  const then = theme.useToken();
  const color = useAppSelector(state => state.app.color);
  const { themeHtmlClassName } = useTransformTheme();

  const colorList = ['#722ed1', '#eb2f96', '#52c41a', '#13c2c2', '#fadb14', '#fa541c', '#f5222d'];

  const { ThemeSettingsDiv } = getThemeSettingsStyle(then.token);

  return (
    <ThemeSettingsDiv>
      <div className="color-list">
        {colorList.map(i => {
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
      <div className="options">
        <span>灰色模式</span>
        <Switch onChange={e => themeHtmlClassName('html-grey', e)} />
      </div>
      <div className="options">
        <span>色弱模式</span>
        <Switch onChange={e => themeHtmlClassName('html-weakness', e)} />
      </div>
    </ThemeSettingsDiv>
  );
});

export default ThemeSettings;
