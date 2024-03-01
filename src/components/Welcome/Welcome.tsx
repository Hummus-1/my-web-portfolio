import { Text, Flex, Group } from '@mantine/core';
import classes from './Welcome.module.css';

const skills = ['React', 'Typescript', 'Javascript', 'Python', 'C++', 'Vue'];

export function Welcome() {
  return (
    <Flex direction="column" className={classes.div}>
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
      <Text size="md" fw="400">
        Software Engineer
      </Text>
      <Group gap="xs">
        {skills.map((skill, index) => (
          <>
            <Text size="sm" td="underline">
              {skill}
            </Text>
            <Text size="sm">{index < skills.length - 1 && '+'}</Text>
          </>
        ))}
      </Group>
    </Flex>
  );
}
