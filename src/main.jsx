import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/home/Home';
import BookDetails from './components/bookDetails/BookDetails';
import ListedBook from './components/listedBook/ListedBook';
import ReadBooks from './components/readBooks/ReadBooks';
import WishlistBooks from './components/wishlistBooks/WishlistBooks';
import PageToRead from './components/pageToRead/PageToRead';
import ErrorElement from './components/errorElement/ErrorElement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../books.json')
      },
      {
        path:'/listedBooks',
        element:<ListedBook></ListedBook>,

        children:[
          {
            path: '/listedBooks',
            element:<ReadBooks></ReadBooks>,
            loader:()=>fetch('../books.json'),
          },
          {
            path:'/listedBooks/wish',
            element:<WishlistBooks></WishlistBooks>,
            loader:()=>fetch('../books.json'),
          }
        ]
      },
      {
        path:'/pagesToRead',
        element:<PageToRead></PageToRead>,
        loader:()=>fetch('../books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
