import React from 'react';
import { Navigate } from 'react-router-dom';
import LayoutManager from './layouts';
import LandingPage from './landing-page';

const routes = [
  {
    path: '',
    element: <LayoutManager />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '*', element: <Navigate to="/" /> },
      { path: '', element: <Navigate to="/" /> }
    ]
  }
];

export default routes;
