import React from 'react';
import SigninCardPage from './signin/SigninCard';
import SigninSplitCardPage from './signin/SigninSplitCard';
import EmptyLayout from './layouts/EmptyLayout';
import { Navigate } from 'react-router';

const routes = [
  { 
    path: '',
    element: <EmptyLayout />,
    children: [
      {
        path: '/signin',
        element: <SigninCardPage />
      },
      {
        path: '/signin/split-card',
        element: <SigninSplitCardPage />
      }
    ]
  }
];

export default routes;
