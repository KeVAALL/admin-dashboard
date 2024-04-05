// import { lazy } from 'react';
// import CommonLayout from 'layout/CommonLayout';
// import Loadable from 'components/Loadable';
// const PagesLanding = Loadable(lazy(() => import('pages/landing')));
import { useRoutes } from 'react-router-dom';

// project-imports
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// render - landing page

// ==============================|| ROUTES RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    // {
    //   path: '/',
    //   element: <CommonLayout />,
    //   children: [
    //     {
    //       path: '/',
    //       element: <PagesLanding />
    //     }
    //   ]
    // },
    LoginRoutes,
    MainRoutes
  ]);
}
