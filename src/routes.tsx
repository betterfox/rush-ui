import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import ExampleSigninCardPage from './examples/signin/SigninCard';
import ExampleSigninSplitScreenPage from './examples/signin/SigninSplitScreen';
import ExampleSigninSplitCardPage from './examples/signin/SigninSplitCard';
import ShowCaseSignin from './pages/Form/Signin';
import EmptyLayout from './layouts/EmptyLayout';
import { Navigate } from 'react-router';
import TopBarLayout from './layouts/TopBarLayout';

const routes = [
  { 
    path: 'examples',
    element: <EmptyLayout />,
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
    path: 'show-case',
    element: <TopBarLayout />,
    children: [
      { path: '/signin', element: <ShowCaseSignin /> }
    ]
  },
  {
    path: '',
    element: <TopBarLayout hasHeroSection={true} />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '*', element: <Navigate to="/" /> },
      { path: '', element: <Navigate to="/" /> }
    ]
  }
];

export default routes;
