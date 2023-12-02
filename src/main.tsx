import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import ForgetPassword from './pages/ForgetPassword';
import Login from './pages/Login';

// Configure router
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/forget-password',
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: '*',
    element: <Login></Login>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router}></RouterProvider>);
