import { useLocale } from '@/locales';
import { Button, Result } from 'antd';
import { memo } from 'react';

function Error500() {
  const init = useLocale();

  return (
    <Result
      status="500"
      title="500"
      subTitle={init.formatMessage({ id: 'layout.error.500' })}
      extra={<Button type="primary">Back Home</Button>}
    />
  );
}

export default memo(Error500);
