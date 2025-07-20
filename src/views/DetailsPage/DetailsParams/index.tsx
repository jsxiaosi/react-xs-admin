import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useLocale } from '@/locales';
import { useInfoPageTabs } from '../hooks/useInfoPageTabs';

const DetailsParams = memo(() => {
  const [id, setId] = useState<string>();
  const params = useParams();
  const { handleTabs } = useInfoPageTabs();
  const intl = useLocale();

  useEffect(() => {
    setId(params.id);
    handleTabs('params', 'update', Number(params.id));
  }, []);
  return (
    <>
      {intl.formatMessage({ id: 'layout.memu.detailsPage' })}Params-{id}
    </>
  );
});

export default DetailsParams;
