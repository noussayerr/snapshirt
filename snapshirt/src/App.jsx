import React ,{useEffect}from 'react';
import { useAuthStore } from "./store/authStore";
import { Toaster } from "react-hot-toast";
import {Routes, Route, useLocation,Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './view/home';
import Footer from './components/footer';
import Customtshirt from './view/customtshirt';
import Cart from './view/cart';
import Profile from './view/profile';
import ModalContent from './components/modalContent';
import SignUpPage from './view/SignupPage';
import EmailVerificationPage from './view/EmailVerificationPage';
import ForgotPasswordPage from './view/forgotPassword';
import ResetPasswordPage from './view/resetPassword';
import LoadingSpinner from './components/spiner';
import AdminPage from './view/dashboard';
import Shop from './view/shop';
import Checkout from './view/checkout';
import { useCartStore } from "./store/useCartStore";

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (user?.isVerified === false) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};


const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();
	if (isAuthenticated) {
	  return <Navigate to='/' replace />;
	}
  
	return children;
  };


export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const { isCheckingAuth, checkAuth } = useAuthStore();
  const {getCartItems}=useCartStore()
	useEffect(() => {
		checkAuth();
    getCartItems();
	}, [checkAuth]);
  if (isCheckingAuth) return <LoadingSpinner />;
  const isLoginRoute = location.pathname === '/login';
  return (
    <div className='font-sans'>
      
      <Navbar />
      <Routes location={background || location}>
        <Route path='/' element={<Home />} />
        <Route path='/customize' element={<Customtshirt />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup'
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
        }/>
        <Route path='/verify-email' element={<EmailVerificationPage />}/>
        <Route path='/forgot-password' element={	<ForgotPasswordPage />}/>
        <Route path='/reset_password/:token' element={<ResetPasswordPage />}/>
		    <Route path='*' element={<Navigate to='/' replace />} />
        <Route path='/login'  />
        <Route path='/dashboard' element={<AdminPage />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      {isLoginRoute && (
        <>
          {background ? null : <Home />}
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <RedirectAuthenticatedUser>
              <ModalContent onClose={() => window.history.back()} />
          </RedirectAuthenticatedUser>  
          </div>
        </>
      )}

      <Toaster />
      <Footer />
    </div>
  );
}
