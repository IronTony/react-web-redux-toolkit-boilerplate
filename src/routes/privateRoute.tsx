import { FC, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes } from './routesList';

interface Props {
  children: ReactElement<any, any> | null;
  redirectTo?: string;
}

const PrivateRoute: FC<Props> = ({ children, redirectTo = AppRoutes.NoAccessPage }) => {
  const isAuthenticated = false;
  const isLoading = false;
  const location = useLocation();

  if (isLoading) return null;

  return isAuthenticated ? children : <Navigate replace to={redirectTo} state={{ path: location.pathname }} />;
};

export { PrivateRoute };
