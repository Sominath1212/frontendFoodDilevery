
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Cart from './components/Cart';
import ExporeMenu from './components/ExporeMenu';
import StoreContextProvider from './context/StoreContex';
import ContactUs from './components/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/signuppage',
        element: <SignUpPage />
      },
      {
        path: '/loginpage',
        element: <LoginPage />
      },
      {
        path: '/contactus',
        element: <ContactUs />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/ExporeMenu',
        element: <ExporeMenu />
      },



    ]
  }])

function App() {
  return (
   
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    
  )
}

export default App

