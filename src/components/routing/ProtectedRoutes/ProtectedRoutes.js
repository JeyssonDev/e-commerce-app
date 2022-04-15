import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserFromLocalStorage } from '../../../services';

const ProtectedRoutes = () => {
   const loggedUser = useSelector((state) => state.app.loggedUser);

   if (loggedUser || getUserFromLocalStorage()) {
      return <Outlet />;
   } else {
      return <Navigate to='/' />;
   }
};

export default ProtectedRoutes;
