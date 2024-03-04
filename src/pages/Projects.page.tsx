import { PageTemplate } from '@/components/PageTemplate/PageTemplate';
import { ProjectSlider } from '@/components/ProjectsSlider/ProjectsSlider';
import classes from '../components/PageTemplate/PageTemplate.module.css';

export function ProjectsPage() {
  return (
    <PageTemplate
      heightLimit={850}
      imageRoute="./src/public/images/sheeps3.webp"
      titleSection={
        <div title="Projects" className={classes['glitched-title']}>
          Projects
        </div>
      }
    >
      <ProjectSlider />
    </PageTemplate>
  );
}
