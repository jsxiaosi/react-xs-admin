import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';

interface AuthorityType {
  children: React.ReactNode;
}

const Authority = ({ children }: AuthorityType) => {
  const userInfo = useAppSelector((state) => state.userInfo);

  if (!userInfo) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default Authority;
