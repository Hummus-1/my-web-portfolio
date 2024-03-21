import { PageTemplate } from '@/components/PageTemplate/PageTemplate';
import { ProjectSlider } from '@/components/ProjectsSlider/ProjectsSlider';
import classes from '../components/PageTemplate/PageTemplate.module.css';

export function ProjectsPage() {
  return (
    <PageTemplate
      effectiveImageHeighPercentage={0.4}
      darkModeImageBrightness={125}
      primaryColor="sheepBrown"
      useChildrenMinimumHeigh
      imageRoute="/static/images/sheeps.webp"
      titleSection={
        <div data-glitch="Projects" className={classes['glitched-title']}>
          Projects
        </div>
      }
    >
      <ProjectSlider />
    </PageTemplate>
  );
}
