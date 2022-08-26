import { useLocation, Navigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

interface RequireAuthProps {
  children: JSX.Element;
}

function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;
