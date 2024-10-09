import { useLocale } from '@/locales';
import { Button, Result } from 'antd';
import { memo } from 'react';

function Error404() {
  const init = useLocale();

  return (
    <Result
      status="404"
      title="404"
      subTitle={init.formatMessage({ id: 'layout.error.404' })}
      extra={<Button type="primary">Back Home</Button>}
    />
  );
}

export default memo(Error404);
