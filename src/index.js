import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Main';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Skills from './components/Skills'
import Contact from "./components/Contact";
import Hire from './components/Hire'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Main />,
      children:[
        {
          path:'/',
          element:< App />
        },
        {
          path:'/hero',
          element:< Hero />
        },
        {
          path:'/work',
          element:< Work />
        },
        {
          path:'/services',
          element:< Services />
        },
        {
          path:'/education',
          element:< Education />
        },
        {
          path:'/blogs',
          element:< Blog />
        },
        {
          path:'/skills',
          element:< Skills />
        },
        {
          path:'/contact',
          element:< Contact />
        },
        {
        path:'/hire me',
        element:< Hire />
      },




      ]
    }

    
  ])

root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

