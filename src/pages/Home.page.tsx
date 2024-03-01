import { Welcome } from '../components/Welcome/Welcome';
import { PageTemplate } from '@/components/PageTemplate/PageTemplate';

export function HomePage() {
  return (
    <PageTemplate>
      <Welcome />
    </PageTemplate>
  );
}
