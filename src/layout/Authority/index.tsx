import { Navigate } from 'react-router-dom';
import type { UseInfoType } from '@/server/useInfo';
import { getStorage } from '@/utils/storage';

interface AuthorityType {
  children: React.ReactNode;
}

const Authority = ({ children }: AuthorityType) => {
  const userInfo = getStorage<UseInfoType>('userInfo');

  if (!userInfo) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default Authority;
