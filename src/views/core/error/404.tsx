import { Button, Result } from 'antd';
import { memo } from 'react';
import { useLocale } from '@/locales';

export default memo(() => {
  const init = useLocale();

  return (
    <Result
      status="404"
      title="404"
      subTitle={init.formatMessage({ id: 'layout.error.404' })}
      extra={<Button type="primary">Back Home</Button>}
    />
  );
});
