import React from 'react';
import SigninCardPage from './signin/SigninCard';
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
      }
    ]
  }
];

export default routes;
