import { memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInfoPageTabs } from '../hooks/useInfoPageTabs';

const DatailsInfo = memo(() => {
  const [id, setId] = useState<string>();
  const [searchParams] = useSearchParams();
  const { handleTabs } = useInfoPageTabs();

  useEffect(() => {
    setId(searchParams.get('id') || '');
    handleTabs('qurey', 'update', Number(searchParams.get('id')));
  }, []);
  return <>详情页-{id}</>;
});

export default DatailsInfo;
