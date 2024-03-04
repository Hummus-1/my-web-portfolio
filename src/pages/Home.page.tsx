import { Flex, Group, Text } from '@mantine/core';
import { PageTemplate } from '@/components/PageTemplate/PageTemplate';
import classes from '../components/PageTemplate/PageTemplate.module.css';

const skills = ['React', 'Typescript', 'Javascript', 'Python', 'C++', 'Vue'];

export function HomePage() {
  return (
    <PageTemplate
      // ! Problems with height limit
      heightLimit={1200}
      imageRoute="./src/public/images/corv.jpeg"
      imageMaximumWidth="1800px"
      titleSection={
        <>
          <Flex gap="3rem">
            <div title="Daniel " className={classes['glitched-title']}>
              Daniel
            </div>
            <div title="García" className={classes['glitched-title']}>
              García
            </div>
            <div title="Hernández" className={classes['glitched-title']}>
              Hernández
            </div>
          </Flex>
          <Text style={{ zIndex: 1 }} size="md" fw="400">
            Software Engineer
          </Text>
          <Group gap="xs">
            {skills.map((skill, index) => (
              <>
                <Text style={{ zIndex: 1 }} size="sm" td="underline">
                  {skill}
                </Text>
                <Text style={{ zIndex: 1 }} size="sm">
                  {index < skills.length - 1 && '+'}
                </Text>
              </>
            ))}
          </Group>
        </>
      }
    >
      {/* <PageTemplate /> */}
    </PageTemplate>
  );
}
