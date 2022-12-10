import { Button, Result } from 'antd';
import { memo } from 'react';
import { useLocale } from '@/locales';

export default memo(() => {
  const init = useLocale();
  return (
    <Result
      status="500"
      title="500"
      subTitle={init.formatMessage({ id: 'layout.error.500' })}
      extra={<Button type="primary">Back Home</Button>}
    />
  );
});
