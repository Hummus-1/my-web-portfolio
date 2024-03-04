import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ProjectsPage } from './pages/Projects.page';
import { PhotographyPage } from './pages/Photography.page';

export const routes = [
  { path: '/', id: 'Home', element: <HomePage /> },
  { path: '/projects', id: 'Projects', element: <ProjectsPage /> },
  { path: '/photography', id: 'Photography', element: <PhotographyPage /> },
];

const router = createBrowserRouter(routes);

export function Router() {
  return <RouterProvider router={router} />;
}
