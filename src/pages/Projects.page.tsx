import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { PageTemplate } from '@/components/PageTemplate/PageTemplate';
import { ProjectSlider } from '@/components/ProjectsSlider/ProjectsSlider';

export function ProjectsPage() {
  return (
    <PageTemplate>
      <ProjectSlider />
    </PageTemplate>
  );
}
