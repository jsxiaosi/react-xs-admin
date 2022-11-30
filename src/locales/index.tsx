import type { MessageDescriptor } from 'react-intl';
import { useIntl, FormattedMessage as IntFormattedMessage } from 'react-intl';
import en_US from './en_US';
import zh_CN from './zh_CN';

export const localeConfig = {
  'zh-CN': zh_CN,
  'en-US': en_US,
};

export type LocaleType = keyof typeof localeConfig;

type Id = keyof typeof en_US;

interface Props extends MessageDescriptor {
  id: Id;
}

export const FormattedMessage: React.FC<Props> = (props) => {
  return <IntFormattedMessage {...props} id={props.id} />;
};

type FormatMessageProps = (descriptor: Props) => string;

export const useLocale = () => {
  const { formatMessage: intlFormatMessage, ...rest } = useIntl();
  const formatMessage: FormatMessageProps = intlFormatMessage;

  return {
    ...rest,
    formatMessage,
  };
};
