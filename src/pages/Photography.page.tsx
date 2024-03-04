import { PageTemplate } from '@/components/PageTemplate/PageTemplate';
import classes from '../components/PageTemplate/PageTemplate.module.css';

export function PhotographyPage() {
  return (
    <PageTemplate
      heightLimit={1020}
      blackMode
      primaryColor="snakeGreen"
      imageRoute="./src/public/images/snake.webp"
      titleSection={
        <div
          title="Photography"
          className={classes['glitched-title']}
          style={{ zIndex: 'inherit' }}
        >
          Photography
        </div>
      }
    >
      In Progress
    </PageTemplate>
  );
}
