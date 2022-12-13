import { Result, Typography } from 'antd';
import { memo } from 'react';
import { useRouteError } from 'react-router-dom';
import { useLocale } from '@/locales';

const { Paragraph, Text } = Typography;

interface ErrorElementType {
  pageType: 'Layout' | 'Page';
}

const ErrorElement = memo((props: ErrorElementType) => {
  const errorText = useRouteError() as Error;
  const intl = useLocale();
  return (
    <Result status="error" title={`${props.pageType} Error`} subTitle={errorText.message}>
      <div className="desc">
        <Paragraph>
          <Text
            strong
            style={{
              fontSize: 16,
            }}
          >
            {intl.formatMessage({ id: 'layout.error.element.content' })}
          </Text>
        </Paragraph>
        <Paragraph>{errorText.stack}</Paragraph>
      </div>
    </Result>
  );
});

export default ErrorElement;
