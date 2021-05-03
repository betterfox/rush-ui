import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import ExampleSigninCardPage from './examples/signin/SigninCard';
import ExampleSigninSplitScreenPage from './examples/signin/SigninSplitScreen';
import ExampleSigninSplitCardPage from './examples/signin/SigninSplitCard';
import EmptyLayout from './layouts/EmptyLayout';
import LayoutManager from './layouts';
import { Navigate } from 'react-router';

const routes = [
  { 
    path: '/examples',
    element: EmptyLayout,
    children: [
      {
        path: '/signin',
        element: <ExampleSigninCardPage />
      },
      {
        path: '/signin/split-screen',
        element: <ExampleSigninSplitScreenPage />
      },
      {
        path: '/signin/split-card',
        element: <ExampleSigninSplitCardPage />
      },
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
