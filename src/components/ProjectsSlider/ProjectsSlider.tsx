import { Badge, Card, Flex, Group, Image, SimpleGrid, Text } from '@mantine/core';
import { projects } from '@/data/projects';

export const ProjectSlider = () => (
  <Flex w="100%" justify="center" align="center">
    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, lg: 4 }}>
      {projects.map((project) => (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{project.name}</Text>
            {project.currentlyWorking && <Badge color="green">Current</Badge>}
          </Group>

          <Text size="sm" c="dimmed">
            {project.description}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  </Flex>
);
