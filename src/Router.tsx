import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ProjectsPage } from './pages/Projects.page';

export const routes = [
  { path: '/', id: 'Home', element: <HomePage /> },
  { path: '/projects', id: 'Projects', element: <ProjectsPage /> },
  { path: '/photography', id: 'Photography', element: <ProjectsPage /> },
];

const router = createBrowserRouter(routes);

export function Router() {
  return <RouterProvider router={router} />;
}
