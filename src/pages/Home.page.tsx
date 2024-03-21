import { Flex, Group, SimpleGrid, Text } from '@mantine/core';
import { PageTemplate } from '@/components/PageTemplate/PageTemplate';
import classes from '../components/PageTemplate/PageTemplate.module.css';

const skills = ['React', 'Typescript', 'Javascript', 'Python', 'C++', 'Vue', 'Data Science'];

export function HomePage() {
  return (
    <PageTemplate
      effectiveImageHeighPercentage={0.77}
      darkModeImageBrightness={150}
      imageRoute="/static/images/corv.jpeg"
      imageMaximumWidth="1800px"
      titleSection={
        <>
          <Flex gap="3rem" className={classes['title-container']}>
            <div data-glitch="Daniel " className={classes['glitched-title']}>
              Daniel
            </div>
            <div data-glitch="García" className={classes['glitched-title']}>
              García
            </div>
            <div data-glitch="Hernández" className={classes['glitched-title']}>
              Hernández
            </div>
          </Flex>
          <Text style={{ zIndex: 1 }} size="md" fw="400" p="xs">
            Software Engineer
          </Text>
          <Group gap="xs" pl="md" pr="md" align="center" justify="center">
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
