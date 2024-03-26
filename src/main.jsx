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

import PageToRead from './components/pageToRead/PageToRead';
import ErrorElement from './components/errorElement/ErrorElement';
import AuthorProfile from './components/authorProfile/AuthorProfile';
import TopRatedBooks from './components/topRateBooks/TopRatedBooks';

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
        loader:()=>fetch('../books.json'),
        
      },
      {
        path:'/pagesToRead',
        element:<PageToRead></PageToRead>,
        loader:()=>fetch('../books.json')
      },
      {
        path:'/author/:id',
        element: <AuthorProfile></AuthorProfile>,
        loader:()=>fetch('../books.json')

      },{
        path:'topRated',
        element:<TopRatedBooks></TopRatedBooks>,
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
