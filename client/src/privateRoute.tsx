import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export type PrivateRouteProps = {
    children: ReactNode
}


const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const [user, setUser] = useState("");
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);
  if (user && user !== 'admin') {
    return <Navigate to="/" />;
  }
  return children;
};


export default PrivateRoute;
