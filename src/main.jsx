import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import AllBooks from './components/AllBooks/AllBooks.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Register from './components/Register/Register.jsx';
import AddBook from './components/AddBook/AddBook.jsx';
import MyBooks from './components/myBook/MyBooks.jsx';
import Error from './components/error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'allBooks',
        Component: AllBooks
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'addBooks',
        element: <AddBook></AddBook>
      },
      {
        path: 'myBooks',
        element: <MyBooks></MyBooks>
      },
      {
        path:'*',
        element: <Error></Error>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
