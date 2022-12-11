import type { IntlShape, MessageDescriptor } from 'react-intl';
import { createIntl, useIntl, FormattedMessage as IntFormattedMessage } from 'react-intl';
import en_US from './en_US';
import zh_CN from './zh_CN';

export const localeConfig = {
  'zh-CN': zh_CN,
  'en-US': en_US,
};

export type LocaleType = keyof typeof localeConfig;

export type LocaleId = keyof typeof zh_CN;

interface Props extends MessageDescriptor {
  id: LocaleId;
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

let g_intl: IntlShape;

/**
 * 获取当前的 intl 对象，可以在 node 中使用
 * @param locale 需要切换的语言类型
 * @param changeIntl 是否不使用 g_intl
 * @returns IntlShape
 */
export const getIntl = (locale?: LocaleType, changeIntl?: boolean) => {
  // 如果全局的 g_intl 存在，且不是 setIntl 调用
  if (g_intl && !changeIntl && !locale) {
    return g_intl;
  }
  // 如果存在于 localeInfo 中
  if (locale && localeConfig[locale]) {
    return createIntl({
      locale,
      messages: localeConfig[locale],
    });
  }
  // 使用 zh-CN
  if (localeConfig['zh-CN'])
    return createIntl({
      locale: 'zh-CN',
      messages: localeConfig['zh-CN'],
    });

  // 如果还没有，返回一个空的
  return createIntl({
    locale: 'zh-CN',
    messages: {},
  });
};

export const getIntlText = (id: LocaleId) => {
  return getIntl().formatMessage({ id });
};

/**
 * 切换全局的 intl 的设置
 * @param locale 语言的key
 */
export const setIntl = (locale: LocaleType) => {
  g_intl = getIntl(locale, true);
};
