import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 import Home from './App';
import Skills from './components/skills';
import Projects from './components/projects';
// import Contact from './components/contact';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home/>,
    // este error element se activa cuando se intenta ingresar a una ruta o url no valida
    errorElement:<h1>Eror</h1>
  },
  {
    path: '/skills',
    element: <Skills/>
  },

  {
    path: '/projects',
    element: <Projects/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
