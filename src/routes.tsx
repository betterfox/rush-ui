import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import ExampleSigninCardPage from './examples/signin/SigninCard';
import ExampleSigninSplitScreenPage from './examples/signin/SigninSplitScreen';

const routes = [
  {
    path: '/examples/signin',
    element: <ExampleSigninCardPage />
  },
  {
    path: '/examples/signin/split-screen',
    element: <ExampleSigninSplitScreenPage />
  },
  {
    path: '/', element: <LandingPage />
  }
];

export default routes;
