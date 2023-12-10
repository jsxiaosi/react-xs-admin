import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Redirect = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/' + params['*'] + location.search, { replace: true });
  }, []);

  return <></>;
};

export default Redirect;
