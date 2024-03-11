import {
  Anchor,
  Badge,
  Card,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { projects } from '@/data/projects';
import classes from './ProjectSlider.module.css';

export const ProjectSlider = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex w="100%" justify="center" align="center">
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, lg: 4 }}>
        {projects.map((project) => (
          <Card padding="lg" radius="none" maw="350px" style={{ backgroundColor: 'transparent' }}>
            <Card.Section>
              <Image
                src={
                  project.coverImagePath
                    ? project.coverImagePath
                    : 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png'
                }
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Stack align="center" mt="md" mb="xs" gap="4px">
              {project.name.map((name) =>
                project.projectWebsite ? (
                  <Anchor
                    size="sm"
                    fw={500}
                    className={classes.projectTitle}
                    href={project.projectWebsite}
                    c={colorScheme === 'light' ? 'black' : 'white'}
                  >
                    {name}
                  </Anchor>
                ) : (
                  <Text size="sm" fw={500} className={classes.projectTitle}>
                    {name}
                  </Text>
                )
              )}
              <Anchor
                size="xs"
                c={colorScheme === 'light' ? 'black' : 'white'}
                href={project.companyWebsite}
                underline={project.companyWebsite ? 'hover' : 'never'}
              >
                {project.companyName}
              </Anchor>
            </Stack>

            <Text size="sm" ta="center" mb="xs">
              {project.description}
            </Text>
            {project.currentlyWorking && (
              <Stack align="center">
                <Badge>Currently working</Badge>
              </Stack>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
