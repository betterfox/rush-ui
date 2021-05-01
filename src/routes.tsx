import React from 'react';
import { Navigate } from 'react-router-dom';
import LayoutManager from './layouts';
import LandingPage from './landing-page';
import EmptyLayout from './layouts/EmptyLayout';
import ExampleSigninPage from './examples/signin/Signin';

const routes = [
  {
    path: '/examples',
    element: <EmptyLayout />,
    children: [
      { path: '/signin', element: <ExampleSigninPage /> }
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
