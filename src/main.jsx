import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignInPage from './pages/sign-in/sign-in-page'
import SignUpPage from './pages/sign-up/sign-up-page'
import ErrorPage from './components/error-page';



const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/sign-in",
    element: <SignInPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

