import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Loader, MainLayout, ProtectedRoutes } from './components';
import { useEffect } from 'react';
import { getUserFromLocalStorage } from './services';
import { useDispatch, useSelector } from 'react-redux';
import { setCartThunk, setUser } from './redux/actions';
import { ProductPage, ProductsPage, PurchasesPage } from './views';
import NotFound from './views/NotFound/NotFound';

function App() {
   const dispatch = useDispatch();
   const isLoading = useSelector((state) => state.app.isLoading);

   useEffect(() => {
      const loggedUser = getUserFromLocalStorage();
      if (loggedUser) {
         dispatch(setUser(loggedUser.user));
         dispatch(setCartThunk());
      }
   }, [dispatch]);

   return (
      <>
         <Routes>
            <Route element={<MainLayout />}>
               <Route path='/' element={<ProductsPage />} />
               <Route path='/products/:id' element={<ProductPage />} />

               <Route element={<ProtectedRoutes />}>
                  <Route path='/purchases' element={<PurchasesPage />} />
               </Route>
               <Route path='*' element={<NotFound />} />
            </Route>
         </Routes>
         {isLoading && <Loader />}
      </>
   );
}

export default App;
