import { Button, Result } from 'antd';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '@/locales';

export default memo(() => {
  const init = useLocale();

  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title="403"
      subTitle={init.formatMessage({ id: 'layout.error.403' })}
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate('/');
          }}
        >
          Back Home
        </Button>
      }
    />
  );
});
