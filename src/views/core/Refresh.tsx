import { Navigate, useLocation, useParams } from 'react-router';

const Redirect = () => {
  const params = useParams();
  const location = useLocation();

  return <Navigate to={`/${params['*']}${location.search}`} replace />;
};

export default Redirect;
