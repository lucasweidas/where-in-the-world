import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import CountryPage from './components/CountryPage';
import Index from './components/Index';
import CountriesPage from './components/CountriesPage';
import Error from './components/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index={true} element={<Index />} />
      <Route path="/countries" element={<CountriesPage />} />
      <Route path="/countries/:country" element={<CountryPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
