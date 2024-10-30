import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from '../types';

export function PrivateRoute({ children, condition } :PrivateRouteProps) {
  return condition ? children : <Navigate to="/login" />;
}
