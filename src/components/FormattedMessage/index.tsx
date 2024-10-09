import { FormattedMessage as IntFormattedMessage } from 'react-intl';
import type { Props } from '@/locales';

export const FormattedMessage: React.FC<Props> = ({ id, ...props }) => {
  return <IntFormattedMessage {...props} id={id} />;
};
