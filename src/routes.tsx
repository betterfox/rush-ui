import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import ExampleSigninPage from './examples/signin/Signin';

const routes = [
  {
    path: '/examples/sigin',
    element: <ExampleSigninPage />
  },
  {
    path: '/', element: <LandingPage />
  }
];

export default routes;
