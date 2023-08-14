import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import { AuthorizationStatusType } from '../../types/authorization-status';


type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatusType ;
}

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>) {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={ AppRoute.Login } />
  );
}

export { PrivateRoute };
