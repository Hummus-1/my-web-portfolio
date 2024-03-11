import {
  Anchor,
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
              {project.name.map((name) => (
                <Text size="sm" fw={500} className={classes.projectTitle}>
                  {name}
                </Text>
              ))}
              {/* {project.currentlyWorking && <Badge color="green">Current</Badge>} */}
              <Anchor
                size="xs"
                c={colorScheme === 'light' ? 'black' : 'white'}
                href={project.companyWebsite}
                underline={project.companyWebsite ? 'hover' : 'never'}
              >
                {project.companyName}
              </Anchor>
            </Stack>

            <Text size="sm" ta="center">
              {project.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
