import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';

const Redirect = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${params['*']}${location.search}`, { replace: true });
  }, []);

  return null;
};

export default Redirect;
