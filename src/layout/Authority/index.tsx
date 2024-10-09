import { useAppSelector } from '@/store/hooks';
import { Navigate } from 'react-router-dom';

interface AuthorityType {
  children: React.ReactNode;
}

const Authority = ({ children }: AuthorityType) => {
  const user = useAppSelector(state => state.user);

  if (!user?.power) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default Authority;
