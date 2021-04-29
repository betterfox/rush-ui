import React from 'react';
import { Navigate } from 'react-router-dom';
import LayoutManager from './layouts';
import LandingPage from './landing-page';
import EmptyLayout from './layouts/EmptyLayout';
import SigninAkita from './examples/signin';

const routes = [
  {
    path: '/examples',
    element: <EmptyLayout />,
    children: [
      { path: '/signin/akita', element: <SigninAkita /> }
    ]
  },
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
