import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useInfoPageTabs } from '../hooks/useInfoPageTabs';

const DetailsParams = memo(() => {
  const [id, setId] = useState<string>();
  const params = useParams();
  const { handleTabs } = useInfoPageTabs();

  useEffect(() => {
    setId(params.id);
    handleTabs('params', 'update', Number(params.id));
  }, []);
  return <>详情页Params-{id}</>;
});

export default DetailsParams;
