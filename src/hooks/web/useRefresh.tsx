import { useLocation, useNavigate } from 'react-router-dom';

export const useRefresh = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const refresh = (path?: string) => {
    const refreshUrl = path || location.pathname + location.search;
    navigate(`/refresh${refreshUrl}`, { replace: true });
  };

  return {
    refresh,
  };
};
